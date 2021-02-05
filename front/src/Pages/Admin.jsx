import RoyalAssetForm from '../Components/RoyalAssetForm';
import RoyalFamilyForm from '../Components/RoyalFamilyForm';

import '../Style/admin.css';

export default function Admin() {
  return (
    <div className="formDisplay">
      <RoyalFamilyForm />
      <RoyalAssetForm />
    </div>
  );
}
