/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetappActiveDirectoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain user accounts to be added to the local Administrators group of the SMB service. Comma-separated list of domain users or groups. The Domain Admin group is automatically added when the service joins your domain as a hidden group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#administrators NetappActiveDirectory#administrators}
  */
  readonly administrators?: string[];
  /**
  * Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#aes_encryption NetappActiveDirectory#aes_encryption}
  */
  readonly aesEncryption?: boolean | cdktf.IResolvable;
  /**
  * Domain user/group accounts to be added to the Backup Operators group of the SMB service. The Backup Operators group allows members to backup and restore files regardless of whether they have read or write access to the files. Comma-separated list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#backup_operators NetappActiveDirectory#backup_operators}
  */
  readonly backupOperators?: string[];
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#description NetappActiveDirectory#description}
  */
  readonly description?: string;
  /**
  * Comma separated list of DNS server IP addresses for the Active Directory domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#dns NetappActiveDirectory#dns}
  */
  readonly dns: string;
  /**
  * Fully qualified domain name for the Active Directory domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#domain NetappActiveDirectory#domain}
  */
  readonly domain: string;
  /**
  * If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#encrypt_dc_connections NetappActiveDirectory#encrypt_dc_connections}
  */
  readonly encryptDcConnections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#id NetappActiveDirectory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only requried for volumes using kerberized NFSv4.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#kdc_hostname NetappActiveDirectory#kdc_hostname}
  */
  readonly kdcHostname?: string;
  /**
  * IP address of the Active Directory server used as Kerberos Key Distribution Center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#kdc_ip NetappActiveDirectory#kdc_ip}
  */
  readonly kdcIp?: string;
  /**
  * Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#labels NetappActiveDirectory#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Specifies whether or not the LDAP traffic needs to be signed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#ldap_signing NetappActiveDirectory#ldap_signing}
  */
  readonly ldapSigning?: boolean | cdktf.IResolvable;
  /**
  * Name of the region for the policy to apply to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#location NetappActiveDirectory#location}
  */
  readonly location: string;
  /**
  * The resource name of the Active Directory pool. Needs to be unique per location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#name NetappActiveDirectory#name}
  */
  readonly name: string;
  /**
  * NetBIOS name prefix of the server to be created.
  * A five-character random ID is generated automatically, for example, -6f9a, and appended to the prefix. The full UNC share path will have the following format:
  * '\\NetBIOS_PREFIX-ABCD.DOMAIN_NAME\SHARE_NAME'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#net_bios_prefix NetappActiveDirectory#net_bios_prefix}
  */
  readonly netBiosPrefix: string;
  /**
  * Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes.
  * This option can be used to temporarily switch such volumes to AUTH_SYS authentication (user ID + 1-16 groups).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#nfs_users_with_ldap NetappActiveDirectory#nfs_users_with_ldap}
  */
  readonly nfsUsersWithLdap?: boolean | cdktf.IResolvable;
  /**
  * Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes.
  * Defaults to 'CN=Computers' if left empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#organizational_unit NetappActiveDirectory#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Password for specified username. Note - Manual changes done to the password will not be detected. Terraform will not re-apply the password, unless you use a new password in Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#password NetappActiveDirectory#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#project NetappActiveDirectory#project}
  */
  readonly project?: string;
  /**
  * Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#security_operators NetappActiveDirectory#security_operators}
  */
  readonly securityOperators?: string[];
  /**
  * Specifies an Active Directory site to manage domain controller selection.
  * Use when Active Directory domain controllers in multiple regions are configured. Defaults to 'Default-First-Site-Name' if left empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#site NetappActiveDirectory#site}
  */
  readonly site?: string;
  /**
  * Username for the Active Directory account with permissions to create the compute account within the specified organizational unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#username NetappActiveDirectory#username}
  */
  readonly username: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#timeouts NetappActiveDirectory#timeouts}
  */
  readonly timeouts?: NetappActiveDirectoryTimeouts;
}
export interface NetappActiveDirectoryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#create NetappActiveDirectory#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#delete NetappActiveDirectory#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#update NetappActiveDirectory#update}
  */
  readonly update?: string;
}

export function netappActiveDirectoryTimeoutsToTerraform(struct?: NetappActiveDirectoryTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function netappActiveDirectoryTimeoutsToHclTerraform(struct?: NetappActiveDirectoryTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetappActiveDirectoryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetappActiveDirectoryTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: NetappActiveDirectoryTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory google_netapp_active_directory}
*/
export class NetappActiveDirectory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_netapp_active_directory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetappActiveDirectory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetappActiveDirectory to import
  * @param importFromId The id of the existing NetappActiveDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetappActiveDirectory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_netapp_active_directory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/netapp_active_directory google_netapp_active_directory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetappActiveDirectoryConfig
  */
  public constructor(scope: Construct, id: string, config: NetappActiveDirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_netapp_active_directory',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.39.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._administrators = config.administrators;
    this._aesEncryption = config.aesEncryption;
    this._backupOperators = config.backupOperators;
    this._description = config.description;
    this._dns = config.dns;
    this._domain = config.domain;
    this._encryptDcConnections = config.encryptDcConnections;
    this._id = config.id;
    this._kdcHostname = config.kdcHostname;
    this._kdcIp = config.kdcIp;
    this._labels = config.labels;
    this._ldapSigning = config.ldapSigning;
    this._location = config.location;
    this._name = config.name;
    this._netBiosPrefix = config.netBiosPrefix;
    this._nfsUsersWithLdap = config.nfsUsersWithLdap;
    this._organizationalUnit = config.organizationalUnit;
    this._password = config.password;
    this._project = config.project;
    this._securityOperators = config.securityOperators;
    this._site = config.site;
    this._username = config.username;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrators - computed: false, optional: true, required: false
  private _administrators?: string[]; 
  public get administrators() {
    return this.getListAttribute('administrators');
  }
  public set administrators(value: string[]) {
    this._administrators = value;
  }
  public resetAdministrators() {
    this._administrators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorsInput() {
    return this._administrators;
  }

  // aes_encryption - computed: false, optional: true, required: false
  private _aesEncryption?: boolean | cdktf.IResolvable; 
  public get aesEncryption() {
    return this.getBooleanAttribute('aes_encryption');
  }
  public set aesEncryption(value: boolean | cdktf.IResolvable) {
    this._aesEncryption = value;
  }
  public resetAesEncryption() {
    this._aesEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aesEncryptionInput() {
    return this._aesEncryption;
  }

  // backup_operators - computed: false, optional: true, required: false
  private _backupOperators?: string[]; 
  public get backupOperators() {
    return this.getListAttribute('backup_operators');
  }
  public set backupOperators(value: string[]) {
    this._backupOperators = value;
  }
  public resetBackupOperators() {
    this._backupOperators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupOperatorsInput() {
    return this._backupOperators;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dns - computed: false, optional: false, required: true
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // encrypt_dc_connections - computed: false, optional: true, required: false
  private _encryptDcConnections?: boolean | cdktf.IResolvable; 
  public get encryptDcConnections() {
    return this.getBooleanAttribute('encrypt_dc_connections');
  }
  public set encryptDcConnections(value: boolean | cdktf.IResolvable) {
    this._encryptDcConnections = value;
  }
  public resetEncryptDcConnections() {
    this._encryptDcConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptDcConnectionsInput() {
    return this._encryptDcConnections;
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

  // kdc_hostname - computed: false, optional: true, required: false
  private _kdcHostname?: string; 
  public get kdcHostname() {
    return this.getStringAttribute('kdc_hostname');
  }
  public set kdcHostname(value: string) {
    this._kdcHostname = value;
  }
  public resetKdcHostname() {
    this._kdcHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcHostnameInput() {
    return this._kdcHostname;
  }

  // kdc_ip - computed: false, optional: true, required: false
  private _kdcIp?: string; 
  public get kdcIp() {
    return this.getStringAttribute('kdc_ip');
  }
  public set kdcIp(value: string) {
    this._kdcIp = value;
  }
  public resetKdcIp() {
    this._kdcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcIpInput() {
    return this._kdcIp;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // ldap_signing - computed: false, optional: true, required: false
  private _ldapSigning?: boolean | cdktf.IResolvable; 
  public get ldapSigning() {
    return this.getBooleanAttribute('ldap_signing');
  }
  public set ldapSigning(value: boolean | cdktf.IResolvable) {
    this._ldapSigning = value;
  }
  public resetLdapSigning() {
    this._ldapSigning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapSigningInput() {
    return this._ldapSigning;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // net_bios_prefix - computed: false, optional: false, required: true
  private _netBiosPrefix?: string; 
  public get netBiosPrefix() {
    return this.getStringAttribute('net_bios_prefix');
  }
  public set netBiosPrefix(value: string) {
    this._netBiosPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netBiosPrefixInput() {
    return this._netBiosPrefix;
  }

  // nfs_users_with_ldap - computed: false, optional: true, required: false
  private _nfsUsersWithLdap?: boolean | cdktf.IResolvable; 
  public get nfsUsersWithLdap() {
    return this.getBooleanAttribute('nfs_users_with_ldap');
  }
  public set nfsUsersWithLdap(value: boolean | cdktf.IResolvable) {
    this._nfsUsersWithLdap = value;
  }
  public resetNfsUsersWithLdap() {
    this._nfsUsersWithLdap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsUsersWithLdapInput() {
    return this._nfsUsersWithLdap;
  }

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // security_operators - computed: false, optional: true, required: false
  private _securityOperators?: string[]; 
  public get securityOperators() {
    return this.getListAttribute('security_operators');
  }
  public set securityOperators(value: string[]) {
    this._securityOperators = value;
  }
  public resetSecurityOperators() {
    this._securityOperators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityOperatorsInput() {
    return this._securityOperators;
  }

  // site - computed: false, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_details - computed: true, optional: false, required: false
  public get stateDetails() {
    return this.getStringAttribute('state_details');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetappActiveDirectoryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetappActiveDirectoryTimeouts) {
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
      administrators: cdktf.listMapper(cdktf.stringToTerraform, false)(this._administrators),
      aes_encryption: cdktf.booleanToTerraform(this._aesEncryption),
      backup_operators: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backupOperators),
      description: cdktf.stringToTerraform(this._description),
      dns: cdktf.stringToTerraform(this._dns),
      domain: cdktf.stringToTerraform(this._domain),
      encrypt_dc_connections: cdktf.booleanToTerraform(this._encryptDcConnections),
      id: cdktf.stringToTerraform(this._id),
      kdc_hostname: cdktf.stringToTerraform(this._kdcHostname),
      kdc_ip: cdktf.stringToTerraform(this._kdcIp),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      ldap_signing: cdktf.booleanToTerraform(this._ldapSigning),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      net_bios_prefix: cdktf.stringToTerraform(this._netBiosPrefix),
      nfs_users_with_ldap: cdktf.booleanToTerraform(this._nfsUsersWithLdap),
      organizational_unit: cdktf.stringToTerraform(this._organizationalUnit),
      password: cdktf.stringToTerraform(this._password),
      project: cdktf.stringToTerraform(this._project),
      security_operators: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityOperators),
      site: cdktf.stringToTerraform(this._site),
      username: cdktf.stringToTerraform(this._username),
      timeouts: netappActiveDirectoryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      administrators: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._administrators),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aes_encryption: {
        value: cdktf.booleanToHclTerraform(this._aesEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backup_operators: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backupOperators),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns: {
        value: cdktf.stringToHclTerraform(this._dns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypt_dc_connections: {
        value: cdktf.booleanToHclTerraform(this._encryptDcConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kdc_hostname: {
        value: cdktf.stringToHclTerraform(this._kdcHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kdc_ip: {
        value: cdktf.stringToHclTerraform(this._kdcIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ldap_signing: {
        value: cdktf.booleanToHclTerraform(this._ldapSigning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net_bios_prefix: {
        value: cdktf.stringToHclTerraform(this._netBiosPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nfs_users_with_ldap: {
        value: cdktf.booleanToHclTerraform(this._nfsUsersWithLdap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      organizational_unit: {
        value: cdktf.stringToHclTerraform(this._organizationalUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_operators: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityOperators),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: netappActiveDirectoryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetappActiveDirectoryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
