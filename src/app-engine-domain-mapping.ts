// https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEngineDomainMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Relative name of the domain serving the application. Example: example.com.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#domain_name AppEngineDomainMapping#domain_name}
  */
  readonly domainName: string;
  /**
  * Whether the domain creation should override any existing mappings for this domain.
By default, overrides are rejected. Default value: "STRICT" Possible values: ["STRICT", "OVERRIDE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#override_strategy AppEngineDomainMapping#override_strategy}
  */
  readonly overrideStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#project AppEngineDomainMapping#project}
  */
  readonly project?: string;
  /**
  * ssl_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#ssl_settings AppEngineDomainMapping#ssl_settings}
  */
  readonly sslSettings?: AppEngineDomainMappingSslSettings;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#timeouts AppEngineDomainMapping#timeouts}
  */
  readonly timeouts?: AppEngineDomainMappingTimeouts;
}
export class AppEngineDomainMappingResourceRecords extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rrdata - computed: true, optional: false, required: false
  public get rrdata() {
    return this.getStringAttribute('rrdata');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface AppEngineDomainMappingSslSettings {
  /**
  * ID of the AuthorizedCertificate resource configuring SSL for the application. Clearing this field will
remove SSL support.
By default, a managed certificate is automatically created for every domain mapping. To omit SSL support
or to configure SSL manually, specify 'SslManagementType.MANUAL' on a 'CREATE' or 'UPDATE' request. You must be
authorized to administer the 'AuthorizedCertificate' resource to manually map it to a DomainMapping resource.
Example: 12345.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#certificate_id AppEngineDomainMapping#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * SSL management type for this domain. If 'AUTOMATIC', a managed certificate is automatically provisioned.
If 'MANUAL', 'certificateId' must be manually specified in order to configure SSL for this domain. Possible values: ["AUTOMATIC", "MANUAL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#ssl_management_type AppEngineDomainMapping#ssl_management_type}
  */
  readonly sslManagementType: string;
}

export function appEngineDomainMappingSslSettingsToTerraform(struct?: AppEngineDomainMappingSslSettingsOutputReference | AppEngineDomainMappingSslSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
    ssl_management_type: cdktf.stringToTerraform(struct!.sslManagementType),
  }
}

export class AppEngineDomainMappingSslSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppEngineDomainMappingSslSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    if (this._sslManagementType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslManagementType = this._sslManagementType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineDomainMappingSslSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateId = undefined;
      this._sslManagementType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateId = value.certificateId;
      this._sslManagementType = value.sslManagementType;
    }
  }

  // certificate_id - computed: true, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // ssl_management_type - computed: false, optional: false, required: true
  private _sslManagementType?: string; 
  public get sslManagementType() {
    return this.getStringAttribute('ssl_management_type');
  }
  public set sslManagementType(value: string) {
    this._sslManagementType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslManagementTypeInput() {
    return this._sslManagementType;
  }
}
export interface AppEngineDomainMappingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#create AppEngineDomainMapping#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#delete AppEngineDomainMapping#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping#update AppEngineDomainMapping#update}
  */
  readonly update?: string;
}

export function appEngineDomainMappingTimeoutsToTerraform(struct?: AppEngineDomainMappingTimeoutsOutputReference | AppEngineDomainMappingTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class AppEngineDomainMappingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppEngineDomainMappingTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineDomainMappingTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping google_app_engine_domain_mapping}
*/
export class AppEngineDomainMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_app_engine_domain_mapping";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping google_app_engine_domain_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppEngineDomainMappingConfig
  */
  public constructor(scope: Construct, id: string, config: AppEngineDomainMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_app_engine_domain_mapping',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domainName = config.domainName;
    this._overrideStrategy = config.overrideStrategy;
    this._project = config.project;
    this._sslSettings.internalValue = config.sslSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // override_strategy - computed: false, optional: true, required: false
  private _overrideStrategy?: string; 
  public get overrideStrategy() {
    return this.getStringAttribute('override_strategy');
  }
  public set overrideStrategy(value: string) {
    this._overrideStrategy = value;
  }
  public resetOverrideStrategy() {
    this._overrideStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideStrategyInput() {
    return this._overrideStrategy;
  }

  // project - computed: true, optional: true, required: false
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

  // resource_records - computed: true, optional: false, required: false
  public resourceRecords(index: string) {
    return new AppEngineDomainMappingResourceRecords(this, 'resource_records', index);
  }

  // ssl_settings - computed: false, optional: true, required: false
  private _sslSettings = new AppEngineDomainMappingSslSettingsOutputReference(this as any, "ssl_settings", true);
  public get sslSettings() {
    return this._sslSettings;
  }
  public putSslSettings(value: AppEngineDomainMappingSslSettings) {
    this._sslSettings.internalValue = value;
  }
  public resetSslSettings() {
    this._sslSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSettingsInput() {
    return this._sslSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppEngineDomainMappingTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppEngineDomainMappingTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      override_strategy: cdktf.stringToTerraform(this._overrideStrategy),
      project: cdktf.stringToTerraform(this._project),
      ssl_settings: appEngineDomainMappingSslSettingsToTerraform(this._sslSettings.internalValue),
      timeouts: appEngineDomainMappingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
