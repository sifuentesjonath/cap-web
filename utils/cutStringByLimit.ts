import { Str } from '@supercharge/strings';

export default function cutStringByLimit(stringValue: string, limit: number){
	return Str(stringValue).limit(limit,'...').get();
}