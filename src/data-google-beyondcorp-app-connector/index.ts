// https://www.terraform.io/docs/providers/google/d/beyondcorp_app_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleBeyondcorpAppConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/beyondcorp_app_connector#id DataGoogleBeyondcorpAppConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the AppConnector.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/beyondcorp_app_connector#name DataGoogleBeyondcorpAppConnector#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/beyondcorp_app_connector#project DataGoogleBeyondcorpAppConnector#project}
  */
  readonly project?: string;
  /**
  * The region of the AppConnector.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/beyondcorp_app_connector#region DataGoogleBeyondcorpAppConnector#region}
  */
  readonly region?: string;
}
export interface DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount {
}

export function dataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountToTerraform(struct?: DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }
}

export class DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference {
    return new DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleBeyondcorpAppConnectorPrincipalInfo {
}

export function dataGoogleBeyondcorpAppConnectorPrincipalInfoToTerraform(struct?: DataGoogleBeyondcorpAppConnectorPrincipalInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleBeyondcorpAppConnectorPrincipalInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleBeyondcorpAppConnectorPrincipalInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_account - computed: true, optional: false, required: false
  private _serviceAccount = new DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList(this, "service_account", false);
  public get serviceAccount() {
    return this._serviceAccount;
  }
}

export class DataGoogleBeyondcorpAppConnectorPrincipalInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference {
    return new DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/beyondcorp_app_connector google_beyondcorp_app_connector}
*/
export class DataGoogleBeyondcorpAppConnector extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_beyondcorp_app_connector";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/beyondcorp_app_connector google_beyondcorp_app_connector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleBeyondcorpAppConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleBeyondcorpAppConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'google_beyondcorp_app_connector',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.53.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // principal_info - computed: true, optional: false, required: false
  private _principalInfo = new DataGoogleBeyondcorpAppConnectorPrincipalInfoList(this, "principal_info", false);
  public get principalInfo() {
    return this._principalInfo;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
    };
  }
}
