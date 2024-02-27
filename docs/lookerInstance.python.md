# `lookerInstance` Submodule <a name="`lookerInstance` Submodule" id="@cdktf/provider-google.lookerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LookerInstance <a name="LookerInstance" id="@cdktf/provider-google.lookerInstance.LookerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance google_looker_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  admin_settings: LookerInstanceAdminSettings = None,
  consumer_network: str = None,
  custom_domain: LookerInstanceCustomDomain = None,
  deny_maintenance_period: LookerInstanceDenyMaintenancePeriod = None,
  encryption_config: LookerInstanceEncryptionConfig = None,
  id: str = None,
  maintenance_window: LookerInstanceMaintenanceWindow = None,
  oauth_config: LookerInstanceOauthConfig = None,
  platform_edition: str = None,
  private_ip_enabled: typing.Union[bool, IResolvable] = None,
  project: str = None,
  public_ip_enabled: typing.Union[bool, IResolvable] = None,
  region: str = None,
  reserved_range: str = None,
  timeouts: LookerInstanceTimeouts = None,
  user_metadata: LookerInstanceUserMetadata = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.adminSettings">admin_settings</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a></code> | admin_settings block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.consumerNetwork">consumer_network</a></code> | <code>str</code> | Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.customDomain">custom_domain</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a></code> | custom_domain block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.denyMaintenancePeriod">deny_maintenance_period</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a></code> | deny_maintenance_period block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#id LookerInstance#id}. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.platformEdition">platform_edition</a></code> | <code>str</code> | Platform editions for a Looker instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.privateIpEnabled">private_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether private IP is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#project LookerInstance#project}. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.publicIpEnabled">public_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether public IP is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.region">region</a></code> | <code>str</code> | The name of the Looker region of the instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.reservedRange">reserved_range</a></code> | <code>str</code> | Name of a reserved IP address range within the consumer network, to be used for private service access connection. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.userMetadata">user_metadata</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a></code> | user_metadata block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.name"></a>

- *Type:* str

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#name LookerInstance#name}

---

##### `admin_settings`<sup>Optional</sup> <a name="admin_settings" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.adminSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a>

admin_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#admin_settings LookerInstance#admin_settings}

---

##### `consumer_network`<sup>Optional</sup> <a name="consumer_network" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.consumerNetwork"></a>

- *Type:* str

Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#consumer_network LookerInstance#consumer_network}

---

##### `custom_domain`<sup>Optional</sup> <a name="custom_domain" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.customDomain"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#custom_domain LookerInstance#custom_domain}

---

##### `deny_maintenance_period`<sup>Optional</sup> <a name="deny_maintenance_period" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.denyMaintenancePeriod"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a>

deny_maintenance_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#deny_maintenance_period LookerInstance#deny_maintenance_period}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#encryption_config LookerInstance#encryption_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#id LookerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#maintenance_window LookerInstance#maintenance_window}

---

##### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.oauthConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#oauth_config LookerInstance#oauth_config}

---

##### `platform_edition`<sup>Optional</sup> <a name="platform_edition" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.platformEdition"></a>

- *Type:* str

Platform editions for a Looker instance.

Each edition maps to a set of instance features, like its size. Must be one of these values:

* LOOKER_CORE_TRIAL: trial instance
* LOOKER_CORE_STANDARD: pay as you go standard instance
* LOOKER_CORE_STANDARD_ANNUAL: subscription standard instance
* LOOKER_CORE_ENTERPRISE_ANNUAL: subscription enterprise instance
* LOOKER_CORE_EMBED_ANNUAL: subscription embed instance Default value: "LOOKER_CORE_TRIAL" Possible values: ["LOOKER_CORE_TRIAL", "LOOKER_CORE_STANDARD", "LOOKER_CORE_STANDARD_ANNUAL", "LOOKER_CORE_ENTERPRISE_ANNUAL", "LOOKER_CORE_EMBED_ANNUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#platform_edition LookerInstance#platform_edition}

---

##### `private_ip_enabled`<sup>Optional</sup> <a name="private_ip_enabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.privateIpEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether private IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#private_ip_enabled LookerInstance#private_ip_enabled}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#project LookerInstance#project}.

---

##### `public_ip_enabled`<sup>Optional</sup> <a name="public_ip_enabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.publicIpEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether public IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#public_ip_enabled LookerInstance#public_ip_enabled}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.region"></a>

- *Type:* str

The name of the Looker region of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#region LookerInstance#region}

---

##### `reserved_range`<sup>Optional</sup> <a name="reserved_range" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.reservedRange"></a>

- *Type:* str

Name of a reserved IP address range within the consumer network, to be used for private service access connection.

User may or may not specify this in a request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#reserved_range LookerInstance#reserved_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#timeouts LookerInstance#timeouts}

---

##### `user_metadata`<sup>Optional</sup> <a name="user_metadata" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.userMetadata"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a>

user_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#user_metadata LookerInstance#user_metadata}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putAdminSettings">put_admin_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putCustomDomain">put_custom_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putDenyMaintenancePeriod">put_deny_maintenance_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putEncryptionConfig">put_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putOauthConfig">put_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putUserMetadata">put_user_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetAdminSettings">reset_admin_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetConsumerNetwork">reset_consumer_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetCustomDomain">reset_custom_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetDenyMaintenancePeriod">reset_deny_maintenance_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetEncryptionConfig">reset_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetOauthConfig">reset_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetPlatformEdition">reset_platform_edition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetPrivateIpEnabled">reset_private_ip_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetPublicIpEnabled">reset_public_ip_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetReservedRange">reset_reserved_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetUserMetadata">reset_user_metadata</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.lookerInstance.LookerInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.lookerInstance.LookerInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.lookerInstance.LookerInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.lookerInstance.LookerInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.lookerInstance.LookerInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.lookerInstance.LookerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.lookerInstance.LookerInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.lookerInstance.LookerInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.lookerInstance.LookerInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.lookerInstance.LookerInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.lookerInstance.LookerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.lookerInstance.LookerInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.lookerInstance.LookerInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.lookerInstance.LookerInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.lookerInstance.LookerInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.lookerInstance.LookerInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.lookerInstance.LookerInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.lookerInstance.LookerInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.lookerInstance.LookerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.lookerInstance.LookerInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.lookerInstance.LookerInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.lookerInstance.LookerInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_admin_settings` <a name="put_admin_settings" id="@cdktf/provider-google.lookerInstance.LookerInstance.putAdminSettings"></a>

```python
def put_admin_settings(
  allowed_email_domains: typing.List[str] = None
) -> None
```

###### `allowed_email_domains`<sup>Optional</sup> <a name="allowed_email_domains" id="@cdktf/provider-google.lookerInstance.LookerInstance.putAdminSettings.parameter.allowedEmailDomains"></a>

- *Type:* typing.List[str]

Email domain allowlist for the instance.

Define the email domains to which your users can deliver Looker (Google Cloud core) content.
Updating this list will restart the instance. Updating the allowed email domains from terraform
means the value provided will be considered as the entire list and not an amendment to the
existing list of allowed email domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#allowed_email_domains LookerInstance#allowed_email_domains}

---

##### `put_custom_domain` <a name="put_custom_domain" id="@cdktf/provider-google.lookerInstance.LookerInstance.putCustomDomain"></a>

```python
def put_custom_domain(
  domain: str = None
) -> None
```

###### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-google.lookerInstance.LookerInstance.putCustomDomain.parameter.domain"></a>

- *Type:* str

Domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#domain LookerInstance#domain}

---

##### `put_deny_maintenance_period` <a name="put_deny_maintenance_period" id="@cdktf/provider-google.lookerInstance.LookerInstance.putDenyMaintenancePeriod"></a>

```python
def put_deny_maintenance_period(
  end_date: LookerInstanceDenyMaintenancePeriodEndDate,
  start_date: LookerInstanceDenyMaintenancePeriodStartDate,
  time: LookerInstanceDenyMaintenancePeriodTime
) -> None
```

###### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-google.lookerInstance.LookerInstance.putDenyMaintenancePeriod.parameter.endDate"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#end_date LookerInstance#end_date}

---

###### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-google.lookerInstance.LookerInstance.putDenyMaintenancePeriod.parameter.startDate"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#start_date LookerInstance#start_date}

---

###### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-google.lookerInstance.LookerInstance.putDenyMaintenancePeriod.parameter.time"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a>

time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#time LookerInstance#time}

---

##### `put_encryption_config` <a name="put_encryption_config" id="@cdktf/provider-google.lookerInstance.LookerInstance.putEncryptionConfig"></a>

```python
def put_encryption_config(
  kms_key_name: str = None
) -> None
```

###### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.lookerInstance.LookerInstance.putEncryptionConfig.parameter.kmsKeyName"></a>

- *Type:* str

Name of the customer managed encryption key (CMEK) in KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#kms_key_name LookerInstance#kms_key_name}

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-google.lookerInstance.LookerInstance.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  day_of_week: str,
  start_time: LookerInstanceMaintenanceWindowStartTime
) -> None
```

###### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-google.lookerInstance.LookerInstance.putMaintenanceWindow.parameter.dayOfWeek"></a>

- *Type:* str

Required. Day of the week for this MaintenanceWindow (in UTC).

* MONDAY: Monday
* TUESDAY: Tuesday
* WEDNESDAY: Wednesday
* THURSDAY: Thursday
* FRIDAY: Friday
* SATURDAY: Saturday
* SUNDAY: Sunday Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#day_of_week LookerInstance#day_of_week}

---

###### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.lookerInstance.LookerInstance.putMaintenanceWindow.parameter.startTime"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#start_time LookerInstance#start_time}

---

##### `put_oauth_config` <a name="put_oauth_config" id="@cdktf/provider-google.lookerInstance.LookerInstance.putOauthConfig"></a>

```python
def put_oauth_config(
  client_id: str,
  client_secret: str
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google.lookerInstance.LookerInstance.putOauthConfig.parameter.clientId"></a>

- *Type:* str

The client ID for the Oauth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#client_id LookerInstance#client_id}

---

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google.lookerInstance.LookerInstance.putOauthConfig.parameter.clientSecret"></a>

- *Type:* str

The client secret for the Oauth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#client_secret LookerInstance#client_secret}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.lookerInstance.LookerInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.lookerInstance.LookerInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#create LookerInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.lookerInstance.LookerInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#delete LookerInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.lookerInstance.LookerInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#update LookerInstance#update}.

---

##### `put_user_metadata` <a name="put_user_metadata" id="@cdktf/provider-google.lookerInstance.LookerInstance.putUserMetadata"></a>

```python
def put_user_metadata(
  additional_developer_user_count: typing.Union[int, float] = None,
  additional_standard_user_count: typing.Union[int, float] = None,
  additional_viewer_user_count: typing.Union[int, float] = None
) -> None
```

###### `additional_developer_user_count`<sup>Optional</sup> <a name="additional_developer_user_count" id="@cdktf/provider-google.lookerInstance.LookerInstance.putUserMetadata.parameter.additionalDeveloperUserCount"></a>

- *Type:* typing.Union[int, float]

Number of additional Developer Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#additional_developer_user_count LookerInstance#additional_developer_user_count}

---

###### `additional_standard_user_count`<sup>Optional</sup> <a name="additional_standard_user_count" id="@cdktf/provider-google.lookerInstance.LookerInstance.putUserMetadata.parameter.additionalStandardUserCount"></a>

- *Type:* typing.Union[int, float]

Number of additional Standard Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#additional_standard_user_count LookerInstance#additional_standard_user_count}

---

###### `additional_viewer_user_count`<sup>Optional</sup> <a name="additional_viewer_user_count" id="@cdktf/provider-google.lookerInstance.LookerInstance.putUserMetadata.parameter.additionalViewerUserCount"></a>

- *Type:* typing.Union[int, float]

Number of additional Viewer Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#additional_viewer_user_count LookerInstance#additional_viewer_user_count}

---

##### `reset_admin_settings` <a name="reset_admin_settings" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetAdminSettings"></a>

```python
def reset_admin_settings() -> None
```

##### `reset_consumer_network` <a name="reset_consumer_network" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetConsumerNetwork"></a>

```python
def reset_consumer_network() -> None
```

##### `reset_custom_domain` <a name="reset_custom_domain" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetCustomDomain"></a>

```python
def reset_custom_domain() -> None
```

##### `reset_deny_maintenance_period` <a name="reset_deny_maintenance_period" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetDenyMaintenancePeriod"></a>

```python
def reset_deny_maintenance_period() -> None
```

##### `reset_encryption_config` <a name="reset_encryption_config" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetEncryptionConfig"></a>

```python
def reset_encryption_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_oauth_config` <a name="reset_oauth_config" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetOauthConfig"></a>

```python
def reset_oauth_config() -> None
```

##### `reset_platform_edition` <a name="reset_platform_edition" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetPlatformEdition"></a>

```python
def reset_platform_edition() -> None
```

##### `reset_private_ip_enabled` <a name="reset_private_ip_enabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetPrivateIpEnabled"></a>

```python
def reset_private_ip_enabled() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_public_ip_enabled` <a name="reset_public_ip_enabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetPublicIpEnabled"></a>

```python
def reset_public_ip_enabled() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_reserved_range` <a name="reset_reserved_range" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetReservedRange"></a>

```python
def reset_reserved_range() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_metadata` <a name="reset_user_metadata" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetUserMetadata"></a>

```python
def reset_user_metadata() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LookerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.lookerInstance.LookerInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstance.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.lookerInstance.LookerInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.lookerInstance.LookerInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.lookerInstance.LookerInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.lookerInstance.LookerInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.lookerInstance.LookerInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.lookerInstance.LookerInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LookerInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.lookerInstance.LookerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.lookerInstance.LookerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LookerInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.lookerInstance.LookerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LookerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.lookerInstance.LookerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LookerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.adminSettings">admin_settings</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference">LookerInstanceAdminSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.customDomain">custom_domain</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference">LookerInstanceCustomDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.denyMaintenancePeriod">deny_maintenance_period</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference">LookerInstanceDenyMaintenancePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.egressPublicIp">egress_public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference">LookerInstanceEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.ingressPrivateIp">ingress_private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.ingressPublicIp">ingress_public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.lookerUri">looker_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.lookerVersion">looker_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference">LookerInstanceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference">LookerInstanceOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference">LookerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.userMetadata">user_metadata</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference">LookerInstanceUserMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.adminSettingsInput">admin_settings_input</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.consumerNetworkInput">consumer_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.customDomainInput">custom_domain_input</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.denyMaintenancePeriodInput">deny_maintenance_period_input</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.encryptionConfigInput">encryption_config_input</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.oauthConfigInput">oauth_config_input</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.platformEditionInput">platform_edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.privateIpEnabledInput">private_ip_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.publicIpEnabledInput">public_ip_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.reservedRangeInput">reserved_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.userMetadataInput">user_metadata_input</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.consumerNetwork">consumer_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.platformEdition">platform_edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.privateIpEnabled">private_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.publicIpEnabled">public_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.reservedRange">reserved_range</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_settings`<sup>Required</sup> <a name="admin_settings" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.adminSettings"></a>

```python
admin_settings: LookerInstanceAdminSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference">LookerInstanceAdminSettingsOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `custom_domain`<sup>Required</sup> <a name="custom_domain" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.customDomain"></a>

```python
custom_domain: LookerInstanceCustomDomainOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference">LookerInstanceCustomDomainOutputReference</a>

---

##### `deny_maintenance_period`<sup>Required</sup> <a name="deny_maintenance_period" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.denyMaintenancePeriod"></a>

```python
deny_maintenance_period: LookerInstanceDenyMaintenancePeriodOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference">LookerInstanceDenyMaintenancePeriodOutputReference</a>

---

##### `egress_public_ip`<sup>Required</sup> <a name="egress_public_ip" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.egressPublicIp"></a>

```python
egress_public_ip: str
```

- *Type:* str

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.encryptionConfig"></a>

```python
encryption_config: LookerInstanceEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference">LookerInstanceEncryptionConfigOutputReference</a>

---

##### `ingress_private_ip`<sup>Required</sup> <a name="ingress_private_ip" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.ingressPrivateIp"></a>

```python
ingress_private_ip: str
```

- *Type:* str

---

##### `ingress_public_ip`<sup>Required</sup> <a name="ingress_public_ip" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.ingressPublicIp"></a>

```python
ingress_public_ip: str
```

- *Type:* str

---

##### `looker_uri`<sup>Required</sup> <a name="looker_uri" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.lookerUri"></a>

```python
looker_uri: str
```

- *Type:* str

---

##### `looker_version`<sup>Required</sup> <a name="looker_version" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.lookerVersion"></a>

```python
looker_version: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.maintenanceWindow"></a>

```python
maintenance_window: LookerInstanceMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference">LookerInstanceMaintenanceWindowOutputReference</a>

---

##### `oauth_config`<sup>Required</sup> <a name="oauth_config" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.oauthConfig"></a>

```python
oauth_config: LookerInstanceOauthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference">LookerInstanceOauthConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.timeouts"></a>

```python
timeouts: LookerInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference">LookerInstanceTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `user_metadata`<sup>Required</sup> <a name="user_metadata" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.userMetadata"></a>

```python
user_metadata: LookerInstanceUserMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference">LookerInstanceUserMetadataOutputReference</a>

---

##### `admin_settings_input`<sup>Optional</sup> <a name="admin_settings_input" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.adminSettingsInput"></a>

```python
admin_settings_input: LookerInstanceAdminSettings
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a>

---

##### `consumer_network_input`<sup>Optional</sup> <a name="consumer_network_input" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.consumerNetworkInput"></a>

```python
consumer_network_input: str
```

- *Type:* str

---

##### `custom_domain_input`<sup>Optional</sup> <a name="custom_domain_input" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.customDomainInput"></a>

```python
custom_domain_input: LookerInstanceCustomDomain
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a>

---

##### `deny_maintenance_period_input`<sup>Optional</sup> <a name="deny_maintenance_period_input" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.denyMaintenancePeriodInput"></a>

```python
deny_maintenance_period_input: LookerInstanceDenyMaintenancePeriod
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a>

---

##### `encryption_config_input`<sup>Optional</sup> <a name="encryption_config_input" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.encryptionConfigInput"></a>

```python
encryption_config_input: LookerInstanceEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: LookerInstanceMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `oauth_config_input`<sup>Optional</sup> <a name="oauth_config_input" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.oauthConfigInput"></a>

```python
oauth_config_input: LookerInstanceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a>

---

##### `platform_edition_input`<sup>Optional</sup> <a name="platform_edition_input" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.platformEditionInput"></a>

```python
platform_edition_input: str
```

- *Type:* str

---

##### `private_ip_enabled_input`<sup>Optional</sup> <a name="private_ip_enabled_input" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.privateIpEnabledInput"></a>

```python
private_ip_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `public_ip_enabled_input`<sup>Optional</sup> <a name="public_ip_enabled_input" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.publicIpEnabledInput"></a>

```python
public_ip_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `reserved_range_input`<sup>Optional</sup> <a name="reserved_range_input" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.reservedRangeInput"></a>

```python
reserved_range_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LookerInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a>]

---

##### `user_metadata_input`<sup>Optional</sup> <a name="user_metadata_input" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.userMetadataInput"></a>

```python
user_metadata_input: LookerInstanceUserMetadata
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a>

---

##### `consumer_network`<sup>Required</sup> <a name="consumer_network" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.consumerNetwork"></a>

```python
consumer_network: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `platform_edition`<sup>Required</sup> <a name="platform_edition" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.platformEdition"></a>

```python
platform_edition: str
```

- *Type:* str

---

##### `private_ip_enabled`<sup>Required</sup> <a name="private_ip_enabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.privateIpEnabled"></a>

```python
private_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `public_ip_enabled`<sup>Required</sup> <a name="public_ip_enabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.publicIpEnabled"></a>

```python
public_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `reserved_range`<sup>Required</sup> <a name="reserved_range" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.reservedRange"></a>

```python
reserved_range: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LookerInstanceAdminSettings <a name="LookerInstanceAdminSettings" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceAdminSettings(
  allowed_email_domains: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings.property.allowedEmailDomains">allowed_email_domains</a></code> | <code>typing.List[str]</code> | Email domain allowlist for the instance. |

---

##### `allowed_email_domains`<sup>Optional</sup> <a name="allowed_email_domains" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings.property.allowedEmailDomains"></a>

```python
allowed_email_domains: typing.List[str]
```

- *Type:* typing.List[str]

Email domain allowlist for the instance.

Define the email domains to which your users can deliver Looker (Google Cloud core) content.
Updating this list will restart the instance. Updating the allowed email domains from terraform
means the value provided will be considered as the entire list and not an amendment to the
existing list of allowed email domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#allowed_email_domains LookerInstance#allowed_email_domains}

---

### LookerInstanceConfig <a name="LookerInstanceConfig" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  admin_settings: LookerInstanceAdminSettings = None,
  consumer_network: str = None,
  custom_domain: LookerInstanceCustomDomain = None,
  deny_maintenance_period: LookerInstanceDenyMaintenancePeriod = None,
  encryption_config: LookerInstanceEncryptionConfig = None,
  id: str = None,
  maintenance_window: LookerInstanceMaintenanceWindow = None,
  oauth_config: LookerInstanceOauthConfig = None,
  platform_edition: str = None,
  private_ip_enabled: typing.Union[bool, IResolvable] = None,
  project: str = None,
  public_ip_enabled: typing.Union[bool, IResolvable] = None,
  region: str = None,
  reserved_range: str = None,
  timeouts: LookerInstanceTimeouts = None,
  user_metadata: LookerInstanceUserMetadata = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.name">name</a></code> | <code>str</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.adminSettings">admin_settings</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a></code> | admin_settings block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.consumerNetwork">consumer_network</a></code> | <code>str</code> | Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.customDomain">custom_domain</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a></code> | custom_domain block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.denyMaintenancePeriod">deny_maintenance_period</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a></code> | deny_maintenance_period block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#id LookerInstance#id}. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.platformEdition">platform_edition</a></code> | <code>str</code> | Platform editions for a Looker instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.privateIpEnabled">private_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether private IP is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#project LookerInstance#project}. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.publicIpEnabled">public_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether public IP is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.region">region</a></code> | <code>str</code> | The name of the Looker region of the instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.reservedRange">reserved_range</a></code> | <code>str</code> | Name of a reserved IP address range within the consumer network, to be used for private service access connection. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.userMetadata">user_metadata</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a></code> | user_metadata block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#name LookerInstance#name}

---

##### `admin_settings`<sup>Optional</sup> <a name="admin_settings" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.adminSettings"></a>

```python
admin_settings: LookerInstanceAdminSettings
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a>

admin_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#admin_settings LookerInstance#admin_settings}

---

##### `consumer_network`<sup>Optional</sup> <a name="consumer_network" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.consumerNetwork"></a>

```python
consumer_network: str
```

- *Type:* str

Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#consumer_network LookerInstance#consumer_network}

---

##### `custom_domain`<sup>Optional</sup> <a name="custom_domain" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.customDomain"></a>

```python
custom_domain: LookerInstanceCustomDomain
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#custom_domain LookerInstance#custom_domain}

---

##### `deny_maintenance_period`<sup>Optional</sup> <a name="deny_maintenance_period" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.denyMaintenancePeriod"></a>

```python
deny_maintenance_period: LookerInstanceDenyMaintenancePeriod
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a>

deny_maintenance_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#deny_maintenance_period LookerInstance#deny_maintenance_period}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.encryptionConfig"></a>

```python
encryption_config: LookerInstanceEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#encryption_config LookerInstance#encryption_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#id LookerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.maintenanceWindow"></a>

```python
maintenance_window: LookerInstanceMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#maintenance_window LookerInstance#maintenance_window}

---

##### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.oauthConfig"></a>

```python
oauth_config: LookerInstanceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#oauth_config LookerInstance#oauth_config}

---

##### `platform_edition`<sup>Optional</sup> <a name="platform_edition" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.platformEdition"></a>

```python
platform_edition: str
```

- *Type:* str

Platform editions for a Looker instance.

Each edition maps to a set of instance features, like its size. Must be one of these values:

* LOOKER_CORE_TRIAL: trial instance
* LOOKER_CORE_STANDARD: pay as you go standard instance
* LOOKER_CORE_STANDARD_ANNUAL: subscription standard instance
* LOOKER_CORE_ENTERPRISE_ANNUAL: subscription enterprise instance
* LOOKER_CORE_EMBED_ANNUAL: subscription embed instance Default value: "LOOKER_CORE_TRIAL" Possible values: ["LOOKER_CORE_TRIAL", "LOOKER_CORE_STANDARD", "LOOKER_CORE_STANDARD_ANNUAL", "LOOKER_CORE_ENTERPRISE_ANNUAL", "LOOKER_CORE_EMBED_ANNUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#platform_edition LookerInstance#platform_edition}

---

##### `private_ip_enabled`<sup>Optional</sup> <a name="private_ip_enabled" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.privateIpEnabled"></a>

```python
private_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether private IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#private_ip_enabled LookerInstance#private_ip_enabled}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#project LookerInstance#project}.

---

##### `public_ip_enabled`<sup>Optional</sup> <a name="public_ip_enabled" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.publicIpEnabled"></a>

```python
public_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether public IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#public_ip_enabled LookerInstance#public_ip_enabled}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The name of the Looker region of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#region LookerInstance#region}

---

##### `reserved_range`<sup>Optional</sup> <a name="reserved_range" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.reservedRange"></a>

```python
reserved_range: str
```

- *Type:* str

Name of a reserved IP address range within the consumer network, to be used for private service access connection.

User may or may not specify this in a request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#reserved_range LookerInstance#reserved_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.timeouts"></a>

```python
timeouts: LookerInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#timeouts LookerInstance#timeouts}

---

##### `user_metadata`<sup>Optional</sup> <a name="user_metadata" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.userMetadata"></a>

```python
user_metadata: LookerInstanceUserMetadata
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a>

user_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#user_metadata LookerInstance#user_metadata}

---

### LookerInstanceCustomDomain <a name="LookerInstanceCustomDomain" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceCustomDomain(
  domain: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain.property.domain">domain</a></code> | <code>str</code> | Domain name. |

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain.property.domain"></a>

```python
domain: str
```

- *Type:* str

Domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#domain LookerInstance#domain}

---

### LookerInstanceDenyMaintenancePeriod <a name="LookerInstanceDenyMaintenancePeriod" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceDenyMaintenancePeriod(
  end_date: LookerInstanceDenyMaintenancePeriodEndDate,
  start_date: LookerInstanceDenyMaintenancePeriodStartDate,
  time: LookerInstanceDenyMaintenancePeriodTime
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.endDate">end_date</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a></code> | end_date block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.startDate">start_date</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a></code> | start_date block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.time">time</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a></code> | time block. |

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.endDate"></a>

```python
end_date: LookerInstanceDenyMaintenancePeriodEndDate
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#end_date LookerInstance#end_date}

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.startDate"></a>

```python
start_date: LookerInstanceDenyMaintenancePeriodStartDate
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#start_date LookerInstance#start_date}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.time"></a>

```python
time: LookerInstanceDenyMaintenancePeriodTime
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a>

time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#time LookerInstance#time}

---

### LookerInstanceDenyMaintenancePeriodEndDate <a name="LookerInstanceDenyMaintenancePeriodEndDate" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate(
  day: typing.Union[int, float] = None,
  month: typing.Union[int, float] = None,
  year: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.day">day</a></code> | <code>typing.Union[int, float]</code> | Day of a month. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.month">month</a></code> | <code>typing.Union[int, float]</code> | Month of a year. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.year">year</a></code> | <code>typing.Union[int, float]</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#day LookerInstance#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#month LookerInstance#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#year LookerInstance#year}

---

### LookerInstanceDenyMaintenancePeriodStartDate <a name="LookerInstanceDenyMaintenancePeriodStartDate" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate(
  day: typing.Union[int, float] = None,
  month: typing.Union[int, float] = None,
  year: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.day">day</a></code> | <code>typing.Union[int, float]</code> | Day of a month. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.month">month</a></code> | <code>typing.Union[int, float]</code> | Month of a year. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.year">year</a></code> | <code>typing.Union[int, float]</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#day LookerInstance#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#month LookerInstance#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#year LookerInstance#year}

---

### LookerInstanceDenyMaintenancePeriodTime <a name="LookerInstanceDenyMaintenancePeriodTime" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceDenyMaintenancePeriodTime(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#hours LookerInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#minutes LookerInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#nanos LookerInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#seconds LookerInstance#seconds}

---

### LookerInstanceEncryptionConfig <a name="LookerInstanceEncryptionConfig" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceEncryptionConfig(
  kms_key_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Name of the customer managed encryption key (CMEK) in KMS. |

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Name of the customer managed encryption key (CMEK) in KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#kms_key_name LookerInstance#kms_key_name}

---

### LookerInstanceMaintenanceWindow <a name="LookerInstanceMaintenanceWindow" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceMaintenanceWindow(
  day_of_week: str,
  start_time: LookerInstanceMaintenanceWindowStartTime
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | Required. Day of the week for this MaintenanceWindow (in UTC). |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow.property.startTime">start_time</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

Required. Day of the week for this MaintenanceWindow (in UTC).

* MONDAY: Monday
* TUESDAY: Tuesday
* WEDNESDAY: Wednesday
* THURSDAY: Thursday
* FRIDAY: Friday
* SATURDAY: Saturday
* SUNDAY: Sunday Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#day_of_week LookerInstance#day_of_week}

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow.property.startTime"></a>

```python
start_time: LookerInstanceMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#start_time LookerInstance#start_time}

---

### LookerInstanceMaintenanceWindowStartTime <a name="LookerInstanceMaintenanceWindowStartTime" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceMaintenanceWindowStartTime(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#hours LookerInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#minutes LookerInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#nanos LookerInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#seconds LookerInstance#seconds}

---

### LookerInstanceOauthConfig <a name="LookerInstanceOauthConfig" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceOauthConfig(
  client_id: str,
  client_secret: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig.property.clientId">client_id</a></code> | <code>str</code> | The client ID for the Oauth config. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | The client secret for the Oauth config. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID for the Oauth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#client_id LookerInstance#client_id}

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The client secret for the Oauth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#client_secret LookerInstance#client_secret}

---

### LookerInstanceTimeouts <a name="LookerInstanceTimeouts" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#create LookerInstance#create}. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#delete LookerInstance#delete}. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#update LookerInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#create LookerInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#delete LookerInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#update LookerInstance#update}.

---

### LookerInstanceUserMetadata <a name="LookerInstanceUserMetadata" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceUserMetadata(
  additional_developer_user_count: typing.Union[int, float] = None,
  additional_standard_user_count: typing.Union[int, float] = None,
  additional_viewer_user_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalDeveloperUserCount">additional_developer_user_count</a></code> | <code>typing.Union[int, float]</code> | Number of additional Developer Users to allocate to the Looker Instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalStandardUserCount">additional_standard_user_count</a></code> | <code>typing.Union[int, float]</code> | Number of additional Standard Users to allocate to the Looker Instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalViewerUserCount">additional_viewer_user_count</a></code> | <code>typing.Union[int, float]</code> | Number of additional Viewer Users to allocate to the Looker Instance. |

---

##### `additional_developer_user_count`<sup>Optional</sup> <a name="additional_developer_user_count" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalDeveloperUserCount"></a>

```python
additional_developer_user_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of additional Developer Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#additional_developer_user_count LookerInstance#additional_developer_user_count}

---

##### `additional_standard_user_count`<sup>Optional</sup> <a name="additional_standard_user_count" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalStandardUserCount"></a>

```python
additional_standard_user_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of additional Standard Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#additional_standard_user_count LookerInstance#additional_standard_user_count}

---

##### `additional_viewer_user_count`<sup>Optional</sup> <a name="additional_viewer_user_count" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalViewerUserCount"></a>

```python
additional_viewer_user_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of additional Viewer Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#additional_viewer_user_count LookerInstance#additional_viewer_user_count}

---

## Classes <a name="Classes" id="Classes"></a>

### LookerInstanceAdminSettingsOutputReference <a name="LookerInstanceAdminSettingsOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceAdminSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.resetAllowedEmailDomains">reset_allowed_email_domains</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_email_domains` <a name="reset_allowed_email_domains" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.resetAllowedEmailDomains"></a>

```python
def reset_allowed_email_domains() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.allowedEmailDomainsInput">allowed_email_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.allowedEmailDomains">allowed_email_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_email_domains_input`<sup>Optional</sup> <a name="allowed_email_domains_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.allowedEmailDomainsInput"></a>

```python
allowed_email_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_email_domains`<sup>Required</sup> <a name="allowed_email_domains" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.allowedEmailDomains"></a>

```python
allowed_email_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.internalValue"></a>

```python
internal_value: LookerInstanceAdminSettings
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a>

---


### LookerInstanceCustomDomainOutputReference <a name="LookerInstanceCustomDomainOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceCustomDomainOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.resetDomain">reset_domain</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_domain` <a name="reset_domain" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.resetDomain"></a>

```python
def reset_domain() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.internalValue"></a>

```python
internal_value: LookerInstanceCustomDomain
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a>

---


### LookerInstanceDenyMaintenancePeriodEndDateOutputReference <a name="LookerInstanceDenyMaintenancePeriodEndDateOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetDay">reset_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetMonth">reset_month</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetYear">reset_year</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day` <a name="reset_day" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetDay"></a>

```python
def reset_day() -> None
```

##### `reset_month` <a name="reset_month" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetMonth"></a>

```python
def reset_month() -> None
```

##### `reset_year` <a name="reset_year" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetYear"></a>

```python
def reset_year() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.dayInput">day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.monthInput">month_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.yearInput">year_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.year">year</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.dayInput"></a>

```python
day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_input`<sup>Optional</sup> <a name="month_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.monthInput"></a>

```python
month_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year_input`<sup>Optional</sup> <a name="year_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.yearInput"></a>

```python
year_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.internalValue"></a>

```python
internal_value: LookerInstanceDenyMaintenancePeriodEndDate
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a>

---


### LookerInstanceDenyMaintenancePeriodOutputReference <a name="LookerInstanceDenyMaintenancePeriodOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putEndDate">put_end_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putStartDate">put_start_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putTime">put_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_end_date` <a name="put_end_date" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putEndDate"></a>

```python
def put_end_date(
  day: typing.Union[int, float] = None,
  month: typing.Union[int, float] = None,
  year: typing.Union[int, float] = None
) -> None
```

###### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putEndDate.parameter.day"></a>

- *Type:* typing.Union[int, float]

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#day LookerInstance#day}

---

###### `month`<sup>Optional</sup> <a name="month" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putEndDate.parameter.month"></a>

- *Type:* typing.Union[int, float]

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#month LookerInstance#month}

---

###### `year`<sup>Optional</sup> <a name="year" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putEndDate.parameter.year"></a>

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#year LookerInstance#year}

---

##### `put_start_date` <a name="put_start_date" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putStartDate"></a>

```python
def put_start_date(
  day: typing.Union[int, float] = None,
  month: typing.Union[int, float] = None,
  year: typing.Union[int, float] = None
) -> None
```

###### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putStartDate.parameter.day"></a>

- *Type:* typing.Union[int, float]

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#day LookerInstance#day}

---

###### `month`<sup>Optional</sup> <a name="month" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putStartDate.parameter.month"></a>

- *Type:* typing.Union[int, float]

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#month LookerInstance#month}

---

###### `year`<sup>Optional</sup> <a name="year" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putStartDate.parameter.year"></a>

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#year LookerInstance#year}

---

##### `put_time` <a name="put_time" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putTime"></a>

```python
def put_time(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
) -> None
```

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putTime.parameter.hours"></a>

- *Type:* typing.Union[int, float]

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#hours LookerInstance#hours}

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#minutes LookerInstance#minutes}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putTime.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#nanos LookerInstance#nanos}

---

###### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putTime.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#seconds LookerInstance#seconds}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.endDate">end_date</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference">LookerInstanceDenyMaintenancePeriodEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.startDate">start_date</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference">LookerInstanceDenyMaintenancePeriodStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.time">time</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference">LookerInstanceDenyMaintenancePeriodTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.endDateInput">end_date_input</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.startDateInput">start_date_input</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.timeInput">time_input</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.endDate"></a>

```python
end_date: LookerInstanceDenyMaintenancePeriodEndDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference">LookerInstanceDenyMaintenancePeriodEndDateOutputReference</a>

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.startDate"></a>

```python
start_date: LookerInstanceDenyMaintenancePeriodStartDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference">LookerInstanceDenyMaintenancePeriodStartDateOutputReference</a>

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.time"></a>

```python
time: LookerInstanceDenyMaintenancePeriodTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference">LookerInstanceDenyMaintenancePeriodTimeOutputReference</a>

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.endDateInput"></a>

```python
end_date_input: LookerInstanceDenyMaintenancePeriodEndDate
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a>

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.startDateInput"></a>

```python
start_date_input: LookerInstanceDenyMaintenancePeriodStartDate
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a>

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.timeInput"></a>

```python
time_input: LookerInstanceDenyMaintenancePeriodTime
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.internalValue"></a>

```python
internal_value: LookerInstanceDenyMaintenancePeriod
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a>

---


### LookerInstanceDenyMaintenancePeriodStartDateOutputReference <a name="LookerInstanceDenyMaintenancePeriodStartDateOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetDay">reset_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetMonth">reset_month</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetYear">reset_year</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day` <a name="reset_day" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetDay"></a>

```python
def reset_day() -> None
```

##### `reset_month` <a name="reset_month" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetMonth"></a>

```python
def reset_month() -> None
```

##### `reset_year` <a name="reset_year" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetYear"></a>

```python
def reset_year() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.dayInput">day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.monthInput">month_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.yearInput">year_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.year">year</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.dayInput"></a>

```python
day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_input`<sup>Optional</sup> <a name="month_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.monthInput"></a>

```python
month_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year_input`<sup>Optional</sup> <a name="year_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.yearInput"></a>

```python
year_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.internalValue"></a>

```python
internal_value: LookerInstanceDenyMaintenancePeriodStartDate
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a>

---


### LookerInstanceDenyMaintenancePeriodTimeOutputReference <a name="LookerInstanceDenyMaintenancePeriodTimeOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetSeconds">reset_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hours` <a name="reset_hours" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```

##### `reset_seconds` <a name="reset_seconds" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetSeconds"></a>

```python
def reset_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.internalValue"></a>

```python
internal_value: LookerInstanceDenyMaintenancePeriodTime
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a>

---


### LookerInstanceEncryptionConfigOutputReference <a name="LookerInstanceEncryptionConfigOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameVersion">kms_key_name_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyState">kms_key_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_version`<sup>Required</sup> <a name="kms_key_name_version" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameVersion"></a>

```python
kms_key_name_version: str
```

- *Type:* str

---

##### `kms_key_state`<sup>Required</sup> <a name="kms_key_state" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyState"></a>

```python
kms_key_state: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: LookerInstanceEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a>

---


### LookerInstanceMaintenanceWindowOutputReference <a name="LookerInstanceMaintenanceWindowOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.putStartTime">put_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_start_time` <a name="put_start_time" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.putStartTime"></a>

```python
def put_start_time(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
) -> None
```

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.putStartTime.parameter.hours"></a>

- *Type:* typing.Union[int, float]

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#hours LookerInstance#hours}

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.putStartTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#minutes LookerInstance#minutes}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.putStartTime.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#nanos LookerInstance#nanos}

---

###### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.putStartTime.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/looker_instance#seconds LookerInstance#seconds}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.startTime">start_time</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference">LookerInstanceMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.startTimeInput">start_time_input</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.startTime"></a>

```python
start_time: LookerInstanceMaintenanceWindowStartTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference">LookerInstanceMaintenanceWindowStartTimeOutputReference</a>

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.startTimeInput"></a>

```python
start_time_input: LookerInstanceMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a>

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: LookerInstanceMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a>

---


### LookerInstanceMaintenanceWindowStartTimeOutputReference <a name="LookerInstanceMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetSeconds">reset_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hours` <a name="reset_hours" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```

##### `reset_seconds` <a name="reset_seconds" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```python
def reset_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: LookerInstanceMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a>

---


### LookerInstanceOauthConfigOutputReference <a name="LookerInstanceOauthConfigOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceOauthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.internalValue"></a>

```python
internal_value: LookerInstanceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a>

---


### LookerInstanceTimeoutsOutputReference <a name="LookerInstanceTimeoutsOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LookerInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a>]

---


### LookerInstanceUserMetadataOutputReference <a name="LookerInstanceUserMetadataOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import looker_instance

lookerInstance.LookerInstanceUserMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalDeveloperUserCount">reset_additional_developer_user_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalStandardUserCount">reset_additional_standard_user_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalViewerUserCount">reset_additional_viewer_user_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_developer_user_count` <a name="reset_additional_developer_user_count" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalDeveloperUserCount"></a>

```python
def reset_additional_developer_user_count() -> None
```

##### `reset_additional_standard_user_count` <a name="reset_additional_standard_user_count" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalStandardUserCount"></a>

```python
def reset_additional_standard_user_count() -> None
```

##### `reset_additional_viewer_user_count` <a name="reset_additional_viewer_user_count" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalViewerUserCount"></a>

```python
def reset_additional_viewer_user_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCountInput">additional_developer_user_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalStandardUserCountInput">additional_standard_user_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalViewerUserCountInput">additional_viewer_user_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCount">additional_developer_user_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalStandardUserCount">additional_standard_user_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalViewerUserCount">additional_viewer_user_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_developer_user_count_input`<sup>Optional</sup> <a name="additional_developer_user_count_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCountInput"></a>

```python
additional_developer_user_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_standard_user_count_input`<sup>Optional</sup> <a name="additional_standard_user_count_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalStandardUserCountInput"></a>

```python
additional_standard_user_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_viewer_user_count_input`<sup>Optional</sup> <a name="additional_viewer_user_count_input" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalViewerUserCountInput"></a>

```python
additional_viewer_user_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_developer_user_count`<sup>Required</sup> <a name="additional_developer_user_count" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCount"></a>

```python
additional_developer_user_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_standard_user_count`<sup>Required</sup> <a name="additional_standard_user_count" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalStandardUserCount"></a>

```python
additional_standard_user_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_viewer_user_count`<sup>Required</sup> <a name="additional_viewer_user_count" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalViewerUserCount"></a>

```python
additional_viewer_user_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.internalValue"></a>

```python
internal_value: LookerInstanceUserMetadata
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a>

---



