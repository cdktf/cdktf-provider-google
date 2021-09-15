// https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEngineDomainMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Relative name of the domain serving the application. Example: example.com.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping.html#domain_name AppEngineDomainMapping#domain_name}
  */
  readonly domainName: string;
  /**
  * Whether the domain creation should override any existing mappings for this domain.
By default, overrides are rejected. Default value: "STRICT" Possible values: ["STRICT", "OVERRIDE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping.html#override_strategy AppEngineDomainMapping#override_strategy}
  */
  readonly overrideStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping.html#project AppEngineDomainMapping#project}
  */
  readonly project?: string;
  /**
  * ssl_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping.html#ssl_settings AppEngineDomainMapping#ssl_settings}
  */
  readonly sslSettings?: AppEngineDomainMappingSslSettings[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping.html#timeouts AppEngineDomainMapping#timeouts}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping.html#certificate_id AppEngineDomainMapping#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * SSL management type for this domain. If 'AUTOMATIC', a managed certificate is automatically provisioned.
If 'MANUAL', 'certificateId' must be manually specified in order to configure SSL for this domain. Possible values: ["AUTOMATIC", "MANUAL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping.html#ssl_management_type AppEngineDomainMapping#ssl_management_type}
  */
  readonly sslManagementType: string;
}

function appEngineDomainMappingSslSettingsToTerraform(struct?: AppEngineDomainMappingSslSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
    ssl_management_type: cdktf.stringToTerraform(struct!.sslManagementType),
  }
}

export interface AppEngineDomainMappingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping.html#create AppEngineDomainMapping#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping.html#delete AppEngineDomainMapping#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping.html#update AppEngineDomainMapping#update}
  */
  readonly update?: string;
}

function appEngineDomainMappingTimeoutsToTerraform(struct?: AppEngineDomainMappingTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping.html google_app_engine_domain_mapping}
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
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping.html google_app_engine_domain_mapping} Resource
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
    this._sslSettings = config.sslSettings;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
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
  public set overrideStrategy(value: string ) {
    this._overrideStrategy = value;
  }
  public resetOverrideStrategy() {
    this._overrideStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideStrategyInput() {
    return this._overrideStrategy
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
    return this._project
  }

  // resource_records - computed: true, optional: false, required: false
  public resourceRecords(index: string) {
    return new AppEngineDomainMappingResourceRecords(this, 'resource_records', index);
  }

  // ssl_settings - computed: false, optional: true, required: false
  private _sslSettings?: AppEngineDomainMappingSslSettings[];
  public get sslSettings() {
    return this.interpolationForAttribute('ssl_settings') as any;
  }
  public set sslSettings(value: AppEngineDomainMappingSslSettings[] ) {
    this._sslSettings = value;
  }
  public resetSslSettings() {
    this._sslSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSettingsInput() {
    return this._sslSettings
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppEngineDomainMappingTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppEngineDomainMappingTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      override_strategy: cdktf.stringToTerraform(this._overrideStrategy),
      project: cdktf.stringToTerraform(this._project),
      ssl_settings: cdktf.listMapper(appEngineDomainMappingSslSettingsToTerraform)(this._sslSettings),
      timeouts: appEngineDomainMappingTimeoutsToTerraform(this._timeouts),
    };
  }
}
