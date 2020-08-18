// https://www.terraform.io/docs/providers/google/r/app_engine_domain_mapping.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface AppEngineDomainMappingConfig extends TerraformMetaArguments {
  /** Relative name of the domain serving the application. Example: example.com. */
  readonly domainName: string;
  /** Whether the domain creation should override any existing mappings for this domain.
By default, overrides are rejected. Default value: "STRICT" Possible values: ["STRICT", "OVERRIDE"] */
  readonly overrideStrategy?: string;
  readonly project?: string;
  /** ssl_settings block */
  readonly sslSettings?: AppEngineDomainMappingSslSettings[];
  /** timeouts block */
  readonly timeouts?: AppEngineDomainMappingTimeouts;
}
export class AppEngineDomainMappingResourceRecords extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // rrdata - computed: true, optional: false, required: true
  public get rrdata() {
    return this.getStringAttribute('rrdata');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface AppEngineDomainMappingSslSettings {
  /** ID of the AuthorizedCertificate resource configuring SSL for the application. Clearing this field will
remove SSL support.
By default, a managed certificate is automatically created for every domain mapping. To omit SSL support
or to configure SSL manually, specify 'SslManagementType.MANUAL' on a 'CREATE' or 'UPDATE' request. You must be
authorized to administer the 'AuthorizedCertificate' resource to manually map it to a DomainMapping resource.
Example: 12345. */
  readonly certificateId?: string;
  /** SSL management type for this domain. If 'AUTOMATIC', a managed certificate is automatically provisioned.
If 'MANUAL', 'certificateId' must be manually specified in order to configure SSL for this domain. Possible values: ["AUTOMATIC", "MANUAL"] */
  readonly sslManagementType: string;
}
export interface AppEngineDomainMappingTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class AppEngineDomainMapping extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    return this._domainName;
  }
  public set domainName(value: string) {
    this._domainName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // override_strategy - computed: false, optional: true, required: false
  private _overrideStrategy?: string;
  public get overrideStrategy() {
    return this._overrideStrategy;
  }
  public set overrideStrategy(value: string | undefined) {
    this._overrideStrategy = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // resource_records - computed: true, optional: false, required: true
  public resourceRecords(index: string) {
    return new AppEngineDomainMappingResourceRecords(this, 'resource_records', index);
  }

  // ssl_settings - computed: false, optional: true, required: false
  private _sslSettings?: AppEngineDomainMappingSslSettings[];
  public get sslSettings() {
    return this._sslSettings;
  }
  public set sslSettings(value: AppEngineDomainMappingSslSettings[] | undefined) {
    this._sslSettings = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppEngineDomainMappingTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AppEngineDomainMappingTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: this._domainName,
      override_strategy: this._overrideStrategy,
      project: this._project,
      ssl_settings: this._sslSettings,
      timeouts: this._timeouts,
    };
  }
}
