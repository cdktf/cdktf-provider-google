# `cloudQuotasQuotaPreference` Submodule <a name="`cloudQuotasQuotaPreference` Submodule" id="@cdktf/provider-google.cloudQuotasQuotaPreference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudQuotasQuotaPreference <a name="CloudQuotasQuotaPreference" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference google_cloud_quotas_quota_preference}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_quotas_quota_preference

cloudQuotasQuotaPreference.CloudQuotasQuotaPreference(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  quota_config: CloudQuotasQuotaPreferenceQuotaConfig,
  contact_email: str = None,
  dimensions: typing.Mapping[str] = None,
  id: str = None,
  ignore_safety_checks: str = None,
  justification: str = None,
  name: str = None,
  parent: str = None,
  quota_id: str = None,
  service: str = None,
  timeouts: CloudQuotasQuotaPreferenceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.quotaConfig">quota_config</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a></code> | quota_config block. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.contactEmail">contact_email</a></code> | <code>str</code> | An email address that can be used for quota related communication between the Google Cloud and the user in case the Google Cloud needs further information to make a decision on whether the user preferred quota can be granted. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | The dimensions that this quota preference applies to. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#id CloudQuotasQuotaPreference#id}. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.ignoreSafetyChecks">ignore_safety_checks</a></code> | <code>str</code> | The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values: ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"]. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.justification">justification</a></code> | <code>str</code> | The reason / justification for this quota preference. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the quota preference. Required except in the CREATE requests. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent of the quota preference. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.quotaId">quota_id</a></code> | <code>str</code> | The id of the quota to which the quota preference is applied. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.service">service</a></code> | <code>str</code> | The name of the service to which the quota preference is applied. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts">CloudQuotasQuotaPreferenceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `quota_config`<sup>Required</sup> <a name="quota_config" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.quotaConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a>

quota_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#quota_config CloudQuotasQuotaPreference#quota_config}

---

##### `contact_email`<sup>Optional</sup> <a name="contact_email" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.contactEmail"></a>

- *Type:* str

An email address that can be used for quota related communication between the Google Cloud and the user in case the Google Cloud needs further information to make a decision on whether the user preferred quota can be granted.

The Google account for the email address must have quota update permission for the project, folder or organization this quota preference is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#contact_email CloudQuotasQuotaPreference#contact_email}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.dimensions"></a>

- *Type:* typing.Mapping[str]

The dimensions that this quota preference applies to.

The key of the map entry is the name of a dimension, such as "region", "zone", "network_id", and the value of the map entry is the dimension value. If a dimension is missing from the map of dimensions, the quota preference applies to all the dimension values except for those that have other quota preferences configured for the specific value.

NOTE: QuotaPreferences can only be applied across all values of "user" and "resource" dimension. Do not set values for "user" or "resource" in the dimension map.

Example: '{"provider": "Foo Inc"}' where "provider" is a service specific dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#dimensions CloudQuotasQuotaPreference#dimensions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#id CloudQuotasQuotaPreference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_safety_checks`<sup>Optional</sup> <a name="ignore_safety_checks" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.ignoreSafetyChecks"></a>

- *Type:* str

The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values: ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#ignore_safety_checks CloudQuotasQuotaPreference#ignore_safety_checks}

---

##### `justification`<sup>Optional</sup> <a name="justification" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.justification"></a>

- *Type:* str

The reason / justification for this quota preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#justification CloudQuotasQuotaPreference#justification}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the quota preference. Required except in the CREATE requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#name CloudQuotasQuotaPreference#name}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.parent"></a>

- *Type:* str

The parent of the quota preference.

Allowed parents are "projects/[project-id / number]" or "folders/[folder-id / number]" or "organizations/[org-id / number]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#parent CloudQuotasQuotaPreference#parent}

---

##### `quota_id`<sup>Optional</sup> <a name="quota_id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.quotaId"></a>

- *Type:* str

The id of the quota to which the quota preference is applied.

A quota id is unique in the service.
Example: 'CPUS-per-project-region'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#quota_id CloudQuotasQuotaPreference#quota_id}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.service"></a>

- *Type:* str

The name of the service to which the quota preference is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#service CloudQuotasQuotaPreference#service}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts">CloudQuotasQuotaPreferenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#timeouts CloudQuotasQuotaPreference#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putQuotaConfig">put_quota_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetContactEmail">reset_contact_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetIgnoreSafetyChecks">reset_ignore_safety_checks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetJustification">reset_justification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetQuotaId">reset_quota_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_quota_config` <a name="put_quota_config" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putQuotaConfig"></a>

```python
def put_quota_config(
  preferred_value: str,
  annotations: typing.Mapping[str] = None
) -> None
```

###### `preferred_value`<sup>Required</sup> <a name="preferred_value" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putQuotaConfig.parameter.preferredValue"></a>

- *Type:* str

The preferred value.

Must be greater than or equal to -1. If set to -1, it means the value is "unlimited".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#preferred_value CloudQuotasQuotaPreference#preferred_value}

---

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putQuotaConfig.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

The annotations map for clients to store small amounts of arbitrary data.

Do not put PII or other sensitive information here. See https://google.aip.dev/128#annotations.

An object containing a list of "key: value" pairs. Example: '{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#annotations CloudQuotasQuotaPreference#annotations}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#create CloudQuotasQuotaPreference#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#delete CloudQuotasQuotaPreference#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#update CloudQuotasQuotaPreference#update}.

---

##### `reset_contact_email` <a name="reset_contact_email" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetContactEmail"></a>

```python
def reset_contact_email() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_safety_checks` <a name="reset_ignore_safety_checks" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetIgnoreSafetyChecks"></a>

```python
def reset_ignore_safety_checks() -> None
```

##### `reset_justification` <a name="reset_justification" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetJustification"></a>

```python
def reset_justification() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_quota_id` <a name="reset_quota_id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetQuotaId"></a>

```python
def reset_quota_id() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudQuotasQuotaPreference resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import cloud_quotas_quota_preference

cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import cloud_quotas_quota_preference

cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import cloud_quotas_quota_preference

cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import cloud_quotas_quota_preference

cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudQuotasQuotaPreference resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudQuotasQuotaPreference to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudQuotasQuotaPreference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudQuotasQuotaPreference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaConfig">quota_config</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference">CloudQuotasQuotaPreferenceQuotaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference">CloudQuotasQuotaPreferenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.contactEmailInput">contact_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.ignoreSafetyChecksInput">ignore_safety_checks_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.justificationInput">justification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaConfigInput">quota_config_input</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaIdInput">quota_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts">CloudQuotasQuotaPreferenceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.contactEmail">contact_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.ignoreSafetyChecks">ignore_safety_checks</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.justification">justification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaId">quota_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.service">service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `quota_config`<sup>Required</sup> <a name="quota_config" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaConfig"></a>

```python
quota_config: CloudQuotasQuotaPreferenceQuotaConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference">CloudQuotasQuotaPreferenceQuotaConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.timeouts"></a>

```python
timeouts: CloudQuotasQuotaPreferenceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference">CloudQuotasQuotaPreferenceTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `contact_email_input`<sup>Optional</sup> <a name="contact_email_input" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.contactEmailInput"></a>

```python
contact_email_input: str
```

- *Type:* str

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_safety_checks_input`<sup>Optional</sup> <a name="ignore_safety_checks_input" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.ignoreSafetyChecksInput"></a>

```python
ignore_safety_checks_input: str
```

- *Type:* str

---

##### `justification_input`<sup>Optional</sup> <a name="justification_input" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.justificationInput"></a>

```python
justification_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `quota_config_input`<sup>Optional</sup> <a name="quota_config_input" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaConfigInput"></a>

```python
quota_config_input: CloudQuotasQuotaPreferenceQuotaConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a>

---

##### `quota_id_input`<sup>Optional</sup> <a name="quota_id_input" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaIdInput"></a>

```python
quota_id_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CloudQuotasQuotaPreferenceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts">CloudQuotasQuotaPreferenceTimeouts</a>]

---

##### `contact_email`<sup>Required</sup> <a name="contact_email" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.contactEmail"></a>

```python
contact_email: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_safety_checks`<sup>Required</sup> <a name="ignore_safety_checks" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.ignoreSafetyChecks"></a>

```python
ignore_safety_checks: str
```

- *Type:* str

---

##### `justification`<sup>Required</sup> <a name="justification" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.justification"></a>

```python
justification: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `quota_id`<sup>Required</sup> <a name="quota_id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaId"></a>

```python
quota_id: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.service"></a>

```python
service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudQuotasQuotaPreferenceConfig <a name="CloudQuotasQuotaPreferenceConfig" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_quotas_quota_preference

cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  quota_config: CloudQuotasQuotaPreferenceQuotaConfig,
  contact_email: str = None,
  dimensions: typing.Mapping[str] = None,
  id: str = None,
  ignore_safety_checks: str = None,
  justification: str = None,
  name: str = None,
  parent: str = None,
  quota_id: str = None,
  service: str = None,
  timeouts: CloudQuotasQuotaPreferenceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.quotaConfig">quota_config</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a></code> | quota_config block. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.contactEmail">contact_email</a></code> | <code>str</code> | An email address that can be used for quota related communication between the Google Cloud and the user in case the Google Cloud needs further information to make a decision on whether the user preferred quota can be granted. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | The dimensions that this quota preference applies to. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#id CloudQuotasQuotaPreference#id}. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.ignoreSafetyChecks">ignore_safety_checks</a></code> | <code>str</code> | The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values: ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"]. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.justification">justification</a></code> | <code>str</code> | The reason / justification for this quota preference. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.name">name</a></code> | <code>str</code> | The resource name of the quota preference. Required except in the CREATE requests. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.parent">parent</a></code> | <code>str</code> | The parent of the quota preference. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.quotaId">quota_id</a></code> | <code>str</code> | The id of the quota to which the quota preference is applied. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.service">service</a></code> | <code>str</code> | The name of the service to which the quota preference is applied. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts">CloudQuotasQuotaPreferenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `quota_config`<sup>Required</sup> <a name="quota_config" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.quotaConfig"></a>

```python
quota_config: CloudQuotasQuotaPreferenceQuotaConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a>

quota_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#quota_config CloudQuotasQuotaPreference#quota_config}

---

##### `contact_email`<sup>Optional</sup> <a name="contact_email" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.contactEmail"></a>

```python
contact_email: str
```

- *Type:* str

An email address that can be used for quota related communication between the Google Cloud and the user in case the Google Cloud needs further information to make a decision on whether the user preferred quota can be granted.

The Google account for the email address must have quota update permission for the project, folder or organization this quota preference is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#contact_email CloudQuotasQuotaPreference#contact_email}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The dimensions that this quota preference applies to.

The key of the map entry is the name of a dimension, such as "region", "zone", "network_id", and the value of the map entry is the dimension value. If a dimension is missing from the map of dimensions, the quota preference applies to all the dimension values except for those that have other quota preferences configured for the specific value.

NOTE: QuotaPreferences can only be applied across all values of "user" and "resource" dimension. Do not set values for "user" or "resource" in the dimension map.

Example: '{"provider": "Foo Inc"}' where "provider" is a service specific dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#dimensions CloudQuotasQuotaPreference#dimensions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#id CloudQuotasQuotaPreference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_safety_checks`<sup>Optional</sup> <a name="ignore_safety_checks" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.ignoreSafetyChecks"></a>

```python
ignore_safety_checks: str
```

- *Type:* str

The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values: ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#ignore_safety_checks CloudQuotasQuotaPreference#ignore_safety_checks}

---

##### `justification`<sup>Optional</sup> <a name="justification" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.justification"></a>

```python
justification: str
```

- *Type:* str

The reason / justification for this quota preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#justification CloudQuotasQuotaPreference#justification}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the quota preference. Required except in the CREATE requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#name CloudQuotasQuotaPreference#name}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent of the quota preference.

Allowed parents are "projects/[project-id / number]" or "folders/[folder-id / number]" or "organizations/[org-id / number]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#parent CloudQuotasQuotaPreference#parent}

---

##### `quota_id`<sup>Optional</sup> <a name="quota_id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.quotaId"></a>

```python
quota_id: str
```

- *Type:* str

The id of the quota to which the quota preference is applied.

A quota id is unique in the service.
Example: 'CPUS-per-project-region'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#quota_id CloudQuotasQuotaPreference#quota_id}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The name of the service to which the quota preference is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#service CloudQuotasQuotaPreference#service}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.timeouts"></a>

```python
timeouts: CloudQuotasQuotaPreferenceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts">CloudQuotasQuotaPreferenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#timeouts CloudQuotasQuotaPreference#timeouts}

---

### CloudQuotasQuotaPreferenceQuotaConfig <a name="CloudQuotasQuotaPreferenceQuotaConfig" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_quotas_quota_preference

cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig(
  preferred_value: str,
  annotations: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig.property.preferredValue">preferred_value</a></code> | <code>str</code> | The preferred value. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | The annotations map for clients to store small amounts of arbitrary data. |

---

##### `preferred_value`<sup>Required</sup> <a name="preferred_value" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig.property.preferredValue"></a>

```python
preferred_value: str
```

- *Type:* str

The preferred value.

Must be greater than or equal to -1. If set to -1, it means the value is "unlimited".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#preferred_value CloudQuotasQuotaPreference#preferred_value}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The annotations map for clients to store small amounts of arbitrary data.

Do not put PII or other sensitive information here. See https://google.aip.dev/128#annotations.

An object containing a list of "key: value" pairs. Example: '{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#annotations CloudQuotasQuotaPreference#annotations}

---

### CloudQuotasQuotaPreferenceTimeouts <a name="CloudQuotasQuotaPreferenceTimeouts" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_quotas_quota_preference

cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#create CloudQuotasQuotaPreference#create}. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#delete CloudQuotasQuotaPreference#delete}. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#update CloudQuotasQuotaPreference#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#create CloudQuotasQuotaPreference#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#delete CloudQuotasQuotaPreference#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/cloud_quotas_quota_preference#update CloudQuotasQuotaPreference#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudQuotasQuotaPreferenceQuotaConfigOutputReference <a name="CloudQuotasQuotaPreferenceQuotaConfigOutputReference" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_quotas_quota_preference

cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.grantedValue">granted_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.requestOrigin">request_origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.stateDetail">state_detail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.traceId">trace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValueInput">preferred_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValue">preferred_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `granted_value`<sup>Required</sup> <a name="granted_value" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.grantedValue"></a>

```python
granted_value: str
```

- *Type:* str

---

##### `request_origin`<sup>Required</sup> <a name="request_origin" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.requestOrigin"></a>

```python
request_origin: str
```

- *Type:* str

---

##### `state_detail`<sup>Required</sup> <a name="state_detail" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.stateDetail"></a>

```python
state_detail: str
```

- *Type:* str

---

##### `trace_id`<sup>Required</sup> <a name="trace_id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.traceId"></a>

```python
trace_id: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `preferred_value_input`<sup>Optional</sup> <a name="preferred_value_input" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValueInput"></a>

```python
preferred_value_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `preferred_value`<sup>Required</sup> <a name="preferred_value" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValue"></a>

```python
preferred_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudQuotasQuotaPreferenceQuotaConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a>

---


### CloudQuotasQuotaPreferenceTimeoutsOutputReference <a name="CloudQuotasQuotaPreferenceTimeoutsOutputReference" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_quotas_quota_preference

cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts">CloudQuotasQuotaPreferenceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudQuotasQuotaPreferenceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts">CloudQuotasQuotaPreferenceTimeouts</a>]

---



