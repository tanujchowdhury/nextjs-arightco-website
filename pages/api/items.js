// pages/api/items.js

import { createClient } from '@supabase/supabase-js'

const supabaseAdmin = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req, res) {
    const { method, body, query } = req;

    switch (method) {
        case 'GET':
            const { data: items, error: getError } = await supabaseAdmin
                .from('finance')
                .select('*');
            if (getError) {
                console.error('Error fetching items:', getError);
                return res.status(500).json(getError);
            }
            return res.status(200).json(items);

        case 'POST':
            const { data: newItem, error: postError } = await supabaseAdmin
                .from('finance')
                .insert([body]);
            if (postError) {
                console.error('Error posting item:', postError);
                return res.status(500).json(postError);
            }
            return res.status(201).json(newItem);

        case 'PUT':
            const { id, ...updates } = body;
            const { data: updatedItem, error: updateError } = await supabaseAdmin
                .from('finance')
                .update(updates)
                .match({ id });
            if (updateError) {
                console.error('Error updating item:', updateError);
                return res.status(500).json(updateError);
            }
            return res.status(200).json(updatedItem);

        case 'DELETE':
            const { id: deleteId } = query;
            const { data: deletedItem, error: deleteError } = await supabaseAdmin
                .from('finance')
                .delete()
                .match({ id: deleteId });
            if (deleteError) {
                console.error('Error deleting item:', deleteError);
                return res.status(500).json(deleteError);
            }
            return res.status(200).json(deletedItem);

        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}
