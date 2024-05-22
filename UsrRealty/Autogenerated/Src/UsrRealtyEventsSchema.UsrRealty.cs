namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("369f95b2-d075-407a-b0c6-c6fa2d4a47d8");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d6c58dd1-7019-4685-9544-e6999ec83e25");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,107,219,64,16,189,7,242,31,6,209,131,4,102,73,174,117,27,136,93,183,4,66,91,34,185,151,210,195,122,53,86,182,236,135,216,89,57,117,75,254,123,119,181,114,109,75,9,116,46,210,206,188,121,243,222,48,134,107,164,150,11,132,10,157,227,100,183,158,45,173,217,202,166,115,220,75,107,46,47,254,92,94,64,136,142,164,105,160,220,147,71,61,63,77,157,54,106,109,205,171,69,135,108,101,188,244,18,233,127,48,108,181,67,227,7,232,247,62,187,239,83,247,50,104,48,232,242,82,60,162,230,159,131,5,120,15,217,154,220,3,114,229,247,89,241,35,209,183,221,70,73,1,66,113,34,72,181,23,104,224,45,44,56,225,11,149,196,50,248,63,33,180,187,160,88,214,8,59,43,107,248,98,74,190,11,62,114,187,249,137,194,3,161,169,209,205,32,17,46,112,27,76,245,180,183,174,33,192,226,72,119,194,28,99,19,84,176,127,108,7,26,44,230,231,176,196,11,174,247,19,140,231,41,81,164,134,17,184,70,33,53,87,208,58,41,226,150,82,23,251,132,190,218,183,88,47,173,234,180,249,198,85,135,239,6,232,77,30,55,249,53,226,215,229,135,108,60,93,110,33,79,100,55,112,125,117,136,226,28,52,50,22,3,217,29,45,185,17,168,176,14,58,188,235,112,62,69,145,119,241,34,194,77,18,111,176,66,221,42,238,163,110,131,79,112,111,5,87,242,55,223,40,44,123,92,62,184,89,19,186,112,180,38,108,63,92,44,123,64,178,157,19,1,100,93,96,153,77,199,196,56,222,75,186,179,108,6,217,100,2,177,126,55,119,84,89,187,144,77,122,101,5,171,236,160,96,188,158,169,137,32,62,37,216,71,235,52,247,249,200,92,24,123,205,174,22,111,38,155,142,225,31,157,125,234,205,175,126,9,108,163,189,67,127,132,159,55,60,31,159,195,111,248,60,255,5,154,184,68,102,226,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("419d55ab-5845-51c2-d649-5c4b73c31306"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("d6c58dd1-7019-4685-9544-e6999ec83e25"),
				CreatedInSchemaUId = new Guid("369f95b2-d075-407a-b0c6-c6fa2d4a47d8"),
				ModifiedInSchemaUId = new Guid("369f95b2-d075-407a-b0c6-c6fa2d4a47d8")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("369f95b2-d075-407a-b0c6-c6fa2d4a47d8"));
		}

		#endregion

	}

	#endregion

}

