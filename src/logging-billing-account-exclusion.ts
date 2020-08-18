// https://www.terraform.io/docs/providers/google/r/logging_billing_account_exclusion.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LoggingBillingAccountExclusionConfig extends TerraformMetaArguments {
  readonly billingAccount: string;
  /** A human-readable description. */
  readonly description?: string;
  /** Whether this exclusion rule should be disabled or not. This defaults to false. */
  readonly disabled?: boolean;
  /** The filter to apply when excluding logs. Only log entries that match the filter are excluded. */
  readonly filter: string;
  /** The name of the logging exclusion. */
  readonly name: string;
}

// Resource

export class LoggingBillingAccountExclusion extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LoggingBillingAccountExclusionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_logging_billing_account_exclusion',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._billingAccount = config.billingAccount;
    this._description = config.description;
    this._disabled = config.disabled;
    this._filter = config.filter;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_account - computed: false, optional: false, required: true
  private _billingAccount: string;
  public get billingAccount() {
    return this._billingAccount;
  }
  public set billingAccount(value: string) {
    this._billingAccount = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean;
  public get disabled() {
    return this._disabled;
  }
  public set disabled(value: boolean | undefined) {
    this._disabled = value;
  }

  // filter - computed: false, optional: false, required: true
  private _filter: string;
  public get filter() {
    return this._filter;
  }
  public set filter(value: string) {
    this._filter = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_account: this._billingAccount,
      description: this._description,
      disabled: this._disabled,
      filter: this._filter,
      name: this._name,
    };
  }
}
