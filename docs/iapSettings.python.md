# `iapSettings` Submodule <a name="`iapSettings` Submodule" id="@cdktf/provider-google.iapSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapSettings <a name="IapSettings" id="@cdktf/provider-google.iapSettings.IapSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings google_iap_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettings(
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
  access_settings: IapSettingsAccessSettings = None,
  application_settings: IapSettingsApplicationSettings = None,
  id: str = None,
  timeouts: IapSettingsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the IAP protected resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.accessSettings">access_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a></code> | access_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.applicationSettings">application_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a></code> | application_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#id IapSettings#id}. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts">IapSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the IAP protected resource.

Name can have below resources:

* organizations/{organization_id}
* folders/{folder_id}
* projects/{project_id}
* projects/{project_id}/iap_web
* projects/{project_id}/iap_web/compute
* projects/{project_id}/iap_web/compute-{region}
* projects/{project_id}/iap_web/compute/services/{service_id}
* projects/{project_id}/iap_web/compute-{region}/services/{service_id}
* projects/{project_id}/iap_web/appengine-{app_id}
* projects/{project_id}/iap_web/appengine-{app_id}/services/{service_id}
* projects/{project_id}/iap_web/appengine-{app_id}/services/{service_id}/version/{version_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#name IapSettings#name}

---

##### `access_settings`<sup>Optional</sup> <a name="access_settings" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.accessSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a>

access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#access_settings IapSettings#access_settings}

---

##### `application_settings`<sup>Optional</sup> <a name="application_settings" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.applicationSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a>

application_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#application_settings IapSettings#application_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#id IapSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts">IapSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#timeouts IapSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.putAccessSettings">put_access_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.putApplicationSettings">put_application_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.resetAccessSettings">reset_access_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.resetApplicationSettings">reset_application_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iapSettings.IapSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.iapSettings.IapSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iapSettings.IapSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapSettings.IapSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.iapSettings.IapSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.iapSettings.IapSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.iapSettings.IapSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.iapSettings.IapSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.iapSettings.IapSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.iapSettings.IapSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.iapSettings.IapSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.iapSettings.IapSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iapSettings.IapSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iapSettings.IapSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iapSettings.IapSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.iapSettings.IapSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.iapSettings.IapSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapSettings.IapSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapSettings.IapSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iapSettings.IapSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.iapSettings.IapSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapSettings.IapSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.iapSettings.IapSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.iapSettings.IapSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iapSettings.IapSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.iapSettings.IapSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapSettings.IapSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_settings` <a name="put_access_settings" id="@cdktf/provider-google.iapSettings.IapSettings.putAccessSettings"></a>

```python
def put_access_settings(
  allowed_domains_settings: IapSettingsAccessSettingsAllowedDomainsSettings = None,
  cors_settings: IapSettingsAccessSettingsCorsSettings = None,
  gcip_settings: IapSettingsAccessSettingsGcipSettings = None,
  identity_sources: typing.List[str] = None,
  oauth_settings: IapSettingsAccessSettingsOauthSettings = None,
  reauth_settings: IapSettingsAccessSettingsReauthSettings = None,
  workforce_identity_settings: IapSettingsAccessSettingsWorkforceIdentitySettings = None
) -> None
```

###### `allowed_domains_settings`<sup>Optional</sup> <a name="allowed_domains_settings" id="@cdktf/provider-google.iapSettings.IapSettings.putAccessSettings.parameter.allowedDomainsSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings">IapSettingsAccessSettingsAllowedDomainsSettings</a>

allowed_domains_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#allowed_domains_settings IapSettings#allowed_domains_settings}

---

###### `cors_settings`<sup>Optional</sup> <a name="cors_settings" id="@cdktf/provider-google.iapSettings.IapSettings.putAccessSettings.parameter.corsSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings">IapSettingsAccessSettingsCorsSettings</a>

cors_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#cors_settings IapSettings#cors_settings}

---

###### `gcip_settings`<sup>Optional</sup> <a name="gcip_settings" id="@cdktf/provider-google.iapSettings.IapSettings.putAccessSettings.parameter.gcipSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings">IapSettingsAccessSettingsGcipSettings</a>

gcip_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#gcip_settings IapSettings#gcip_settings}

---

###### `identity_sources`<sup>Optional</sup> <a name="identity_sources" id="@cdktf/provider-google.iapSettings.IapSettings.putAccessSettings.parameter.identitySources"></a>

- *Type:* typing.List[str]

Identity sources that IAP can use to authenticate the end user.

Only one identity source
can be configured. The possible values are:

* 'WORKFORCE_IDENTITY_FEDERATION': Use external identities set up on Google Cloud Workforce
  Identity Federation. Possible values: ["WORKFORCE_IDENTITY_FEDERATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#identity_sources IapSettings#identity_sources}

---

###### `oauth_settings`<sup>Optional</sup> <a name="oauth_settings" id="@cdktf/provider-google.iapSettings.IapSettings.putAccessSettings.parameter.oauthSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings">IapSettingsAccessSettingsOauthSettings</a>

oauth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#oauth_settings IapSettings#oauth_settings}

---

###### `reauth_settings`<sup>Optional</sup> <a name="reauth_settings" id="@cdktf/provider-google.iapSettings.IapSettings.putAccessSettings.parameter.reauthSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings">IapSettingsAccessSettingsReauthSettings</a>

reauth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#reauth_settings IapSettings#reauth_settings}

---

###### `workforce_identity_settings`<sup>Optional</sup> <a name="workforce_identity_settings" id="@cdktf/provider-google.iapSettings.IapSettings.putAccessSettings.parameter.workforceIdentitySettings"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings">IapSettingsAccessSettingsWorkforceIdentitySettings</a>

workforce_identity_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#workforce_identity_settings IapSettings#workforce_identity_settings}

---

##### `put_application_settings` <a name="put_application_settings" id="@cdktf/provider-google.iapSettings.IapSettings.putApplicationSettings"></a>

```python
def put_application_settings(
  access_denied_page_settings: IapSettingsApplicationSettingsAccessDeniedPageSettings = None,
  attribute_propagation_settings: IapSettingsApplicationSettingsAttributePropagationSettings = None,
  cookie_domain: str = None,
  csm_settings: IapSettingsApplicationSettingsCsmSettings = None
) -> None
```

###### `access_denied_page_settings`<sup>Optional</sup> <a name="access_denied_page_settings" id="@cdktf/provider-google.iapSettings.IapSettings.putApplicationSettings.parameter.accessDeniedPageSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings">IapSettingsApplicationSettingsAccessDeniedPageSettings</a>

access_denied_page_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#access_denied_page_settings IapSettings#access_denied_page_settings}

---

###### `attribute_propagation_settings`<sup>Optional</sup> <a name="attribute_propagation_settings" id="@cdktf/provider-google.iapSettings.IapSettings.putApplicationSettings.parameter.attributePropagationSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings">IapSettingsApplicationSettingsAttributePropagationSettings</a>

attribute_propagation_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#attribute_propagation_settings IapSettings#attribute_propagation_settings}

---

###### `cookie_domain`<sup>Optional</sup> <a name="cookie_domain" id="@cdktf/provider-google.iapSettings.IapSettings.putApplicationSettings.parameter.cookieDomain"></a>

- *Type:* str

The Domain value to set for cookies generated by IAP.

This value is not validated by the API,
but will be ignored at runtime if invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#cookie_domain IapSettings#cookie_domain}

---

###### `csm_settings`<sup>Optional</sup> <a name="csm_settings" id="@cdktf/provider-google.iapSettings.IapSettings.putApplicationSettings.parameter.csmSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings">IapSettingsApplicationSettingsCsmSettings</a>

csm_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#csm_settings IapSettings#csm_settings}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.iapSettings.IapSettings.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iapSettings.IapSettings.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#create IapSettings#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iapSettings.IapSettings.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#delete IapSettings#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iapSettings.IapSettings.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#update IapSettings#update}.

---

##### `reset_access_settings` <a name="reset_access_settings" id="@cdktf/provider-google.iapSettings.IapSettings.resetAccessSettings"></a>

```python
def reset_access_settings() -> None
```

##### `reset_application_settings` <a name="reset_application_settings" id="@cdktf/provider-google.iapSettings.IapSettings.resetApplicationSettings"></a>

```python
def reset_application_settings() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.iapSettings.IapSettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.iapSettings.IapSettings.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IapSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.iapSettings.IapSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapSettings.IapSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.iapSettings.IapSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapSettings.IapSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.iapSettings.IapSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapSettings.IapSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.iapSettings.IapSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IapSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapSettings.IapSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.iapSettings.IapSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IapSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.iapSettings.IapSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IapSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapSettings.IapSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IapSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.accessSettings">access_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference">IapSettingsAccessSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.applicationSettings">application_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference">IapSettingsApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference">IapSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.accessSettingsInput">access_settings_input</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.applicationSettingsInput">application_settings_input</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts">IapSettingsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iapSettings.IapSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.iapSettings.IapSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.iapSettings.IapSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.iapSettings.IapSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.iapSettings.IapSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.iapSettings.IapSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapSettings.IapSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapSettings.IapSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iapSettings.IapSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iapSettings.IapSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapSettings.IapSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapSettings.IapSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapSettings.IapSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_settings`<sup>Required</sup> <a name="access_settings" id="@cdktf/provider-google.iapSettings.IapSettings.property.accessSettings"></a>

```python
access_settings: IapSettingsAccessSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference">IapSettingsAccessSettingsOutputReference</a>

---

##### `application_settings`<sup>Required</sup> <a name="application_settings" id="@cdktf/provider-google.iapSettings.IapSettings.property.applicationSettings"></a>

```python
application_settings: IapSettingsApplicationSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference">IapSettingsApplicationSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iapSettings.IapSettings.property.timeouts"></a>

```python
timeouts: IapSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference">IapSettingsTimeoutsOutputReference</a>

---

##### `access_settings_input`<sup>Optional</sup> <a name="access_settings_input" id="@cdktf/provider-google.iapSettings.IapSettings.property.accessSettingsInput"></a>

```python
access_settings_input: IapSettingsAccessSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a>

---

##### `application_settings_input`<sup>Optional</sup> <a name="application_settings_input" id="@cdktf/provider-google.iapSettings.IapSettings.property.applicationSettingsInput"></a>

```python
application_settings_input: IapSettingsApplicationSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.iapSettings.IapSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.iapSettings.IapSettings.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.iapSettings.IapSettings.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IapSettingsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts">IapSettingsTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapSettings.IapSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iapSettings.IapSettings.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iapSettings.IapSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IapSettingsAccessSettings <a name="IapSettingsAccessSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsAccessSettings(
  allowed_domains_settings: IapSettingsAccessSettingsAllowedDomainsSettings = None,
  cors_settings: IapSettingsAccessSettingsCorsSettings = None,
  gcip_settings: IapSettingsAccessSettingsGcipSettings = None,
  identity_sources: typing.List[str] = None,
  oauth_settings: IapSettingsAccessSettingsOauthSettings = None,
  reauth_settings: IapSettingsAccessSettingsReauthSettings = None,
  workforce_identity_settings: IapSettingsAccessSettingsWorkforceIdentitySettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.allowedDomainsSettings">allowed_domains_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings">IapSettingsAccessSettingsAllowedDomainsSettings</a></code> | allowed_domains_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.corsSettings">cors_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings">IapSettingsAccessSettingsCorsSettings</a></code> | cors_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.gcipSettings">gcip_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings">IapSettingsAccessSettingsGcipSettings</a></code> | gcip_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.identitySources">identity_sources</a></code> | <code>typing.List[str]</code> | Identity sources that IAP can use to authenticate the end user. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.oauthSettings">oauth_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings">IapSettingsAccessSettingsOauthSettings</a></code> | oauth_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.reauthSettings">reauth_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings">IapSettingsAccessSettingsReauthSettings</a></code> | reauth_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.workforceIdentitySettings">workforce_identity_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings">IapSettingsAccessSettingsWorkforceIdentitySettings</a></code> | workforce_identity_settings block. |

---

##### `allowed_domains_settings`<sup>Optional</sup> <a name="allowed_domains_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.allowedDomainsSettings"></a>

```python
allowed_domains_settings: IapSettingsAccessSettingsAllowedDomainsSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings">IapSettingsAccessSettingsAllowedDomainsSettings</a>

allowed_domains_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#allowed_domains_settings IapSettings#allowed_domains_settings}

---

##### `cors_settings`<sup>Optional</sup> <a name="cors_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.corsSettings"></a>

```python
cors_settings: IapSettingsAccessSettingsCorsSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings">IapSettingsAccessSettingsCorsSettings</a>

cors_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#cors_settings IapSettings#cors_settings}

---

##### `gcip_settings`<sup>Optional</sup> <a name="gcip_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.gcipSettings"></a>

```python
gcip_settings: IapSettingsAccessSettingsGcipSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings">IapSettingsAccessSettingsGcipSettings</a>

gcip_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#gcip_settings IapSettings#gcip_settings}

---

##### `identity_sources`<sup>Optional</sup> <a name="identity_sources" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.identitySources"></a>

```python
identity_sources: typing.List[str]
```

- *Type:* typing.List[str]

Identity sources that IAP can use to authenticate the end user.

Only one identity source
can be configured. The possible values are:

* 'WORKFORCE_IDENTITY_FEDERATION': Use external identities set up on Google Cloud Workforce
  Identity Federation. Possible values: ["WORKFORCE_IDENTITY_FEDERATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#identity_sources IapSettings#identity_sources}

---

##### `oauth_settings`<sup>Optional</sup> <a name="oauth_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.oauthSettings"></a>

```python
oauth_settings: IapSettingsAccessSettingsOauthSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings">IapSettingsAccessSettingsOauthSettings</a>

oauth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#oauth_settings IapSettings#oauth_settings}

---

##### `reauth_settings`<sup>Optional</sup> <a name="reauth_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.reauthSettings"></a>

```python
reauth_settings: IapSettingsAccessSettingsReauthSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings">IapSettingsAccessSettingsReauthSettings</a>

reauth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#reauth_settings IapSettings#reauth_settings}

---

##### `workforce_identity_settings`<sup>Optional</sup> <a name="workforce_identity_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.workforceIdentitySettings"></a>

```python
workforce_identity_settings: IapSettingsAccessSettingsWorkforceIdentitySettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings">IapSettingsAccessSettingsWorkforceIdentitySettings</a>

workforce_identity_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#workforce_identity_settings IapSettings#workforce_identity_settings}

---

### IapSettingsAccessSettingsAllowedDomainsSettings <a name="IapSettingsAccessSettingsAllowedDomainsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings(
  domains: typing.List[str] = None,
  enable: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings.property.domains">domains</a></code> | <code>typing.List[str]</code> | List of trusted domains. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Configuration for customers to opt in for the feature. |

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

List of trusted domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#domains IapSettings#domains}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Configuration for customers to opt in for the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#enable IapSettings#enable}

---

### IapSettingsAccessSettingsCorsSettings <a name="IapSettingsAccessSettingsCorsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsAccessSettingsCorsSettings(
  allow_http_options: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings.property.allowHttpOptions">allow_http_options</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Configuration to allow HTTP OPTIONS calls to skip authorization. |

---

##### `allow_http_options`<sup>Optional</sup> <a name="allow_http_options" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings.property.allowHttpOptions"></a>

```python
allow_http_options: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Configuration to allow HTTP OPTIONS calls to skip authorization.

If undefined, IAP will not apply any special logic to OPTIONS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#allow_http_options IapSettings#allow_http_options}

---

### IapSettingsAccessSettingsGcipSettings <a name="IapSettingsAccessSettingsGcipSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsAccessSettingsGcipSettings(
  login_page_uri: str = None,
  tenant_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings.property.loginPageUri">login_page_uri</a></code> | <code>str</code> | Login page URI associated with the GCIP tenants. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings.property.tenantIds">tenant_ids</a></code> | <code>typing.List[str]</code> | GCIP tenant ids that are linked to the IAP resource. |

---

##### `login_page_uri`<sup>Optional</sup> <a name="login_page_uri" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings.property.loginPageUri"></a>

```python
login_page_uri: str
```

- *Type:* str

Login page URI associated with the GCIP tenants.

Typically, all resources within
the same project share the same login page, though it could be overridden at the
sub resource level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#login_page_uri IapSettings#login_page_uri}

---

##### `tenant_ids`<sup>Optional</sup> <a name="tenant_ids" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings.property.tenantIds"></a>

```python
tenant_ids: typing.List[str]
```

- *Type:* typing.List[str]

GCIP tenant ids that are linked to the IAP resource.

tenantIds could be a string
beginning with a number character to indicate authenticating with GCIP tenant flow,
or in the format of _ to indicate authenticating with GCIP agent flow. If agent flow
is used, tenantIds should only contain one single element, while for tenant flow,
tenantIds can contain multiple elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#tenant_ids IapSettings#tenant_ids}

---

### IapSettingsAccessSettingsOauthSettings <a name="IapSettingsAccessSettingsOauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsAccessSettingsOauthSettings(
  login_hint: str = None,
  programmatic_clients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings.property.loginHint">login_hint</a></code> | <code>str</code> | Domain hint to send as hd=? |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings.property.programmaticClients">programmatic_clients</a></code> | <code>typing.List[str]</code> | List of client ids allowed to use IAP programmatically. |

---

##### `login_hint`<sup>Optional</sup> <a name="login_hint" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings.property.loginHint"></a>

```python
login_hint: str
```

- *Type:* str

Domain hint to send as hd=?

parameter in OAuth request flow.
Enables redirect to primary IDP by skipping Google's login screen.
(https://developers.google.com/identity/protocols/OpenIDConnect#hd-param)
Note: IAP does not verify that the id token's hd claim matches this value
since access behavior is managed by IAM policies.

* loginHint setting is not a replacement for access control. Always enforce an appropriate access policy if you want to restrict access to users outside your domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#login_hint IapSettings#login_hint}

---

##### `programmatic_clients`<sup>Optional</sup> <a name="programmatic_clients" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings.property.programmaticClients"></a>

```python
programmatic_clients: typing.List[str]
```

- *Type:* typing.List[str]

List of client ids allowed to use IAP programmatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#programmatic_clients IapSettings#programmatic_clients}

---

### IapSettingsAccessSettingsReauthSettings <a name="IapSettingsAccessSettingsReauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsAccessSettingsReauthSettings(
  max_age: str,
  method: str,
  policy_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings.property.maxAge">max_age</a></code> | <code>str</code> | Reauth session lifetime, how long before a user has to reauthenticate again. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings.property.method">method</a></code> | <code>str</code> | Reauth method requested. The possible values are:. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings.property.policyType">policy_type</a></code> | <code>str</code> | How IAP determines the effective policy in cases of hierarchical policies. |

---

##### `max_age`<sup>Required</sup> <a name="max_age" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings.property.maxAge"></a>

```python
max_age: str
```

- *Type:* str

Reauth session lifetime, how long before a user has to reauthenticate again.

A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#max_age IapSettings#max_age}

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings.property.method"></a>

```python
method: str
```

- *Type:* str

Reauth method requested. The possible values are:.

* 'LOGIN': Prompts the user to log in again.
* 'SECURE_KEY': User must use their secure key 2nd factor device.
* 'ENROLLED_SECOND_FACTORS': User can use any enabled 2nd factor. Possible values: ["LOGIN", "SECURE_KEY", "ENROLLED_SECOND_FACTORS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#method IapSettings#method}

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

How IAP determines the effective policy in cases of hierarchical policies.

Policies are merged from higher in the hierarchy to lower in the hierarchy.
The possible values are:

* 'MINIMUM': This policy acts as a minimum to other policies, lower in the hierarchy.
  Effective policy may only be the same or stricter.
* 'DEFAULT': This policy acts as a default if no other reauth policy is set. Possible values: ["MINIMUM", "DEFAULT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#policy_type IapSettings#policy_type}

---

### IapSettingsAccessSettingsWorkforceIdentitySettings <a name="IapSettingsAccessSettingsWorkforceIdentitySettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings(
  oauth2: IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 = None,
  workforce_pools: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings.property.oauth2">oauth2</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a></code> | oauth2 block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings.property.workforcePools">workforce_pools</a></code> | <code>typing.List[str]</code> | The workforce pool resources. Only one workforce pool is accepted. |

---

##### `oauth2`<sup>Optional</sup> <a name="oauth2" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings.property.oauth2"></a>

```python
oauth2: IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

oauth2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#oauth2 IapSettings#oauth2}

---

##### `workforce_pools`<sup>Optional</sup> <a name="workforce_pools" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings.property.workforcePools"></a>

```python
workforce_pools: typing.List[str]
```

- *Type:* typing.List[str]

The workforce pool resources. Only one workforce pool is accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#workforce_pools IapSettings#workforce_pools}

---

### IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 <a name="IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2(
  client_id: str = None,
  client_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientId">client_id</a></code> | <code>str</code> | The OAuth 2.0 client ID registered in the workforce identity federation OAuth 2.0 Server. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientSecret">client_secret</a></code> | <code>str</code> | Input only. The OAuth 2.0 client secret created while registering the client ID. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The OAuth 2.0 client ID registered in the workforce identity federation OAuth 2.0 Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#client_id IapSettings#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Input only. The OAuth 2.0 client secret created while registering the client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#client_secret IapSettings#client_secret}

---

### IapSettingsApplicationSettings <a name="IapSettingsApplicationSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsApplicationSettings(
  access_denied_page_settings: IapSettingsApplicationSettingsAccessDeniedPageSettings = None,
  attribute_propagation_settings: IapSettingsApplicationSettingsAttributePropagationSettings = None,
  cookie_domain: str = None,
  csm_settings: IapSettingsApplicationSettingsCsmSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.accessDeniedPageSettings">access_denied_page_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings">IapSettingsApplicationSettingsAccessDeniedPageSettings</a></code> | access_denied_page_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.attributePropagationSettings">attribute_propagation_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings">IapSettingsApplicationSettingsAttributePropagationSettings</a></code> | attribute_propagation_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.cookieDomain">cookie_domain</a></code> | <code>str</code> | The Domain value to set for cookies generated by IAP. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.csmSettings">csm_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings">IapSettingsApplicationSettingsCsmSettings</a></code> | csm_settings block. |

---

##### `access_denied_page_settings`<sup>Optional</sup> <a name="access_denied_page_settings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.accessDeniedPageSettings"></a>

```python
access_denied_page_settings: IapSettingsApplicationSettingsAccessDeniedPageSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings">IapSettingsApplicationSettingsAccessDeniedPageSettings</a>

access_denied_page_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#access_denied_page_settings IapSettings#access_denied_page_settings}

---

##### `attribute_propagation_settings`<sup>Optional</sup> <a name="attribute_propagation_settings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.attributePropagationSettings"></a>

```python
attribute_propagation_settings: IapSettingsApplicationSettingsAttributePropagationSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings">IapSettingsApplicationSettingsAttributePropagationSettings</a>

attribute_propagation_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#attribute_propagation_settings IapSettings#attribute_propagation_settings}

---

##### `cookie_domain`<sup>Optional</sup> <a name="cookie_domain" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.cookieDomain"></a>

```python
cookie_domain: str
```

- *Type:* str

The Domain value to set for cookies generated by IAP.

This value is not validated by the API,
but will be ignored at runtime if invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#cookie_domain IapSettings#cookie_domain}

---

##### `csm_settings`<sup>Optional</sup> <a name="csm_settings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.csmSettings"></a>

```python
csm_settings: IapSettingsApplicationSettingsCsmSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings">IapSettingsApplicationSettingsCsmSettings</a>

csm_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#csm_settings IapSettings#csm_settings}

---

### IapSettingsApplicationSettingsAccessDeniedPageSettings <a name="IapSettingsApplicationSettingsAccessDeniedPageSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings(
  access_denied_page_uri: str = None,
  generate_troubleshooting_uri: typing.Union[bool, IResolvable] = None,
  remediation_token_generation_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings.property.accessDeniedPageUri">access_denied_page_uri</a></code> | <code>str</code> | The URI to be redirected to when access is denied. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings.property.generateTroubleshootingUri">generate_troubleshooting_uri</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to generate a troubleshooting URL on access denied events to this application. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings.property.remediationTokenGenerationEnabled">remediation_token_generation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to generate remediation token on access denied events to this application. |

---

##### `access_denied_page_uri`<sup>Optional</sup> <a name="access_denied_page_uri" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings.property.accessDeniedPageUri"></a>

```python
access_denied_page_uri: str
```

- *Type:* str

The URI to be redirected to when access is denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#access_denied_page_uri IapSettings#access_denied_page_uri}

---

##### `generate_troubleshooting_uri`<sup>Optional</sup> <a name="generate_troubleshooting_uri" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings.property.generateTroubleshootingUri"></a>

```python
generate_troubleshooting_uri: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to generate a troubleshooting URL on access denied events to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#generate_troubleshooting_uri IapSettings#generate_troubleshooting_uri}

---

##### `remediation_token_generation_enabled`<sup>Optional</sup> <a name="remediation_token_generation_enabled" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings.property.remediationTokenGenerationEnabled"></a>

```python
remediation_token_generation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to generate remediation token on access denied events to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#remediation_token_generation_enabled IapSettings#remediation_token_generation_enabled}

---

### IapSettingsApplicationSettingsAttributePropagationSettings <a name="IapSettingsApplicationSettingsAttributePropagationSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings(
  enable: typing.Union[bool, IResolvable] = None,
  expression: str = None,
  output_credentials: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the provided attribute propagation settings should be evaluated on user requests. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings.property.expression">expression</a></code> | <code>str</code> | Raw string CEL expression. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings.property.outputCredentials">output_credentials</a></code> | <code>typing.List[str]</code> | Which output credentials attributes selected by the CEL expression should be propagated in. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the provided attribute propagation settings should be evaluated on user requests.

If set to true, attributes returned from the expression will be propagated in the set output credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#enable IapSettings#enable}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings.property.expression"></a>

```python
expression: str
```

- *Type:* str

Raw string CEL expression.

Must return a list of attributes. A maximum of 45 attributes can
be selected. Expressions can select different attribute types from attributes:
attributes.saml_attributes, attributes.iap_attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#expression IapSettings#expression}

---

##### `output_credentials`<sup>Optional</sup> <a name="output_credentials" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings.property.outputCredentials"></a>

```python
output_credentials: typing.List[str]
```

- *Type:* typing.List[str]

Which output credentials attributes selected by the CEL expression should be propagated in.

All attributes will be fully duplicated in each selected output credential.
Possible values are:

* 'HEADER': Propagate attributes in the headers with "x-goog-iap-attr-" prefix.
* 'JWT': Propagate attributes in the JWT of the form:
  "additional_claims": { "my_attribute": ["value1", "value2"] }
* 'RCTOKEN': Propagate attributes in the RCToken of the form: "
  additional_claims": { "my_attribute": ["value1", "value2"] } Possible values: ["HEADER", "JWT", "RCTOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#output_credentials IapSettings#output_credentials}

---

### IapSettingsApplicationSettingsCsmSettings <a name="IapSettingsApplicationSettingsCsmSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsApplicationSettingsCsmSettings(
  rctoken_aud: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings.property.rctokenAud">rctoken_aud</a></code> | <code>str</code> | Audience claim set in the generated RCToken. This value is not validated by IAP. |

---

##### `rctoken_aud`<sup>Optional</sup> <a name="rctoken_aud" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings.property.rctokenAud"></a>

```python
rctoken_aud: str
```

- *Type:* str

Audience claim set in the generated RCToken. This value is not validated by IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#rctoken_aud IapSettings#rctoken_aud}

---

### IapSettingsConfig <a name="IapSettingsConfig" id="@cdktf/provider-google.iapSettings.IapSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  access_settings: IapSettingsAccessSettings = None,
  application_settings: IapSettingsApplicationSettings = None,
  id: str = None,
  timeouts: IapSettingsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.name">name</a></code> | <code>str</code> | The resource name of the IAP protected resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.accessSettings">access_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a></code> | access_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.applicationSettings">application_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a></code> | application_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#id IapSettings#id}. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts">IapSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the IAP protected resource.

Name can have below resources:

* organizations/{organization_id}
* folders/{folder_id}
* projects/{project_id}
* projects/{project_id}/iap_web
* projects/{project_id}/iap_web/compute
* projects/{project_id}/iap_web/compute-{region}
* projects/{project_id}/iap_web/compute/services/{service_id}
* projects/{project_id}/iap_web/compute-{region}/services/{service_id}
* projects/{project_id}/iap_web/appengine-{app_id}
* projects/{project_id}/iap_web/appengine-{app_id}/services/{service_id}
* projects/{project_id}/iap_web/appengine-{app_id}/services/{service_id}/version/{version_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#name IapSettings#name}

---

##### `access_settings`<sup>Optional</sup> <a name="access_settings" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.accessSettings"></a>

```python
access_settings: IapSettingsAccessSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a>

access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#access_settings IapSettings#access_settings}

---

##### `application_settings`<sup>Optional</sup> <a name="application_settings" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.applicationSettings"></a>

```python
application_settings: IapSettingsApplicationSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a>

application_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#application_settings IapSettings#application_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#id IapSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.timeouts"></a>

```python
timeouts: IapSettingsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts">IapSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#timeouts IapSettings#timeouts}

---

### IapSettingsTimeouts <a name="IapSettingsTimeouts" id="@cdktf/provider-google.iapSettings.IapSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#create IapSettings#create}. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#delete IapSettings#delete}. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#update IapSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iapSettings.IapSettingsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#create IapSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iapSettings.IapSettingsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#delete IapSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iapSettings.IapSettingsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#update IapSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference <a name="IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetDomains">reset_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetEnable">reset_enable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_domains` <a name="reset_domains" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetDomains"></a>

```python
def reset_domains() -> None
```

##### `reset_enable` <a name="reset_enable" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domainsInput">domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domains">domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings">IapSettingsAccessSettingsAllowedDomainsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domains_input`<sup>Optional</sup> <a name="domains_input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domainsInput"></a>

```python
domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IapSettingsAccessSettingsAllowedDomainsSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings">IapSettingsAccessSettingsAllowedDomainsSettings</a>

---


### IapSettingsAccessSettingsCorsSettingsOutputReference <a name="IapSettingsAccessSettingsCorsSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.resetAllowHttpOptions">reset_allow_http_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_http_options` <a name="reset_allow_http_options" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.resetAllowHttpOptions"></a>

```python
def reset_allow_http_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptionsInput">allow_http_options_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptions">allow_http_options</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings">IapSettingsAccessSettingsCorsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_http_options_input`<sup>Optional</sup> <a name="allow_http_options_input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptionsInput"></a>

```python
allow_http_options_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_http_options`<sup>Required</sup> <a name="allow_http_options" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptions"></a>

```python
allow_http_options: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IapSettingsAccessSettingsCorsSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings">IapSettingsAccessSettingsCorsSettings</a>

---


### IapSettingsAccessSettingsGcipSettingsOutputReference <a name="IapSettingsAccessSettingsGcipSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.resetLoginPageUri">reset_login_page_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.resetTenantIds">reset_tenant_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_login_page_uri` <a name="reset_login_page_uri" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.resetLoginPageUri"></a>

```python
def reset_login_page_uri() -> None
```

##### `reset_tenant_ids` <a name="reset_tenant_ids" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.resetTenantIds"></a>

```python
def reset_tenant_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUriInput">login_page_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIdsInput">tenant_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUri">login_page_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIds">tenant_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings">IapSettingsAccessSettingsGcipSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `login_page_uri_input`<sup>Optional</sup> <a name="login_page_uri_input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUriInput"></a>

```python
login_page_uri_input: str
```

- *Type:* str

---

##### `tenant_ids_input`<sup>Optional</sup> <a name="tenant_ids_input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIdsInput"></a>

```python
tenant_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `login_page_uri`<sup>Required</sup> <a name="login_page_uri" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUri"></a>

```python
login_page_uri: str
```

- *Type:* str

---

##### `tenant_ids`<sup>Required</sup> <a name="tenant_ids" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIds"></a>

```python
tenant_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IapSettingsAccessSettingsGcipSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings">IapSettingsAccessSettingsGcipSettings</a>

---


### IapSettingsAccessSettingsOauthSettingsOutputReference <a name="IapSettingsAccessSettingsOauthSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.resetLoginHint">reset_login_hint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.resetProgrammaticClients">reset_programmatic_clients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_login_hint` <a name="reset_login_hint" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.resetLoginHint"></a>

```python
def reset_login_hint() -> None
```

##### `reset_programmatic_clients` <a name="reset_programmatic_clients" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.resetProgrammaticClients"></a>

```python
def reset_programmatic_clients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHintInput">login_hint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClientsInput">programmatic_clients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHint">login_hint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClients">programmatic_clients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings">IapSettingsAccessSettingsOauthSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `login_hint_input`<sup>Optional</sup> <a name="login_hint_input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHintInput"></a>

```python
login_hint_input: str
```

- *Type:* str

---

##### `programmatic_clients_input`<sup>Optional</sup> <a name="programmatic_clients_input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClientsInput"></a>

```python
programmatic_clients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `login_hint`<sup>Required</sup> <a name="login_hint" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHint"></a>

```python
login_hint: str
```

- *Type:* str

---

##### `programmatic_clients`<sup>Required</sup> <a name="programmatic_clients" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClients"></a>

```python
programmatic_clients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IapSettingsAccessSettingsOauthSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings">IapSettingsAccessSettingsOauthSettings</a>

---


### IapSettingsAccessSettingsOutputReference <a name="IapSettingsAccessSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsAccessSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings">put_allowed_domains_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putCorsSettings">put_cors_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putGcipSettings">put_gcip_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putOauthSettings">put_oauth_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putReauthSettings">put_reauth_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings">put_workforce_identity_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetAllowedDomainsSettings">reset_allowed_domains_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetCorsSettings">reset_cors_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetGcipSettings">reset_gcip_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetIdentitySources">reset_identity_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetOauthSettings">reset_oauth_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetReauthSettings">reset_reauth_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetWorkforceIdentitySettings">reset_workforce_identity_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allowed_domains_settings` <a name="put_allowed_domains_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings"></a>

```python
def put_allowed_domains_settings(
  domains: typing.List[str] = None,
  enable: typing.Union[bool, IResolvable] = None
) -> None
```

###### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings.parameter.domains"></a>

- *Type:* typing.List[str]

List of trusted domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#domains IapSettings#domains}

---

###### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Configuration for customers to opt in for the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#enable IapSettings#enable}

---

##### `put_cors_settings` <a name="put_cors_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putCorsSettings"></a>

```python
def put_cors_settings(
  allow_http_options: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allow_http_options`<sup>Optional</sup> <a name="allow_http_options" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putCorsSettings.parameter.allowHttpOptions"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Configuration to allow HTTP OPTIONS calls to skip authorization.

If undefined, IAP will not apply any special logic to OPTIONS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#allow_http_options IapSettings#allow_http_options}

---

##### `put_gcip_settings` <a name="put_gcip_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putGcipSettings"></a>

```python
def put_gcip_settings(
  login_page_uri: str = None,
  tenant_ids: typing.List[str] = None
) -> None
```

###### `login_page_uri`<sup>Optional</sup> <a name="login_page_uri" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putGcipSettings.parameter.loginPageUri"></a>

- *Type:* str

Login page URI associated with the GCIP tenants.

Typically, all resources within
the same project share the same login page, though it could be overridden at the
sub resource level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#login_page_uri IapSettings#login_page_uri}

---

###### `tenant_ids`<sup>Optional</sup> <a name="tenant_ids" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putGcipSettings.parameter.tenantIds"></a>

- *Type:* typing.List[str]

GCIP tenant ids that are linked to the IAP resource.

tenantIds could be a string
beginning with a number character to indicate authenticating with GCIP tenant flow,
or in the format of _ to indicate authenticating with GCIP agent flow. If agent flow
is used, tenantIds should only contain one single element, while for tenant flow,
tenantIds can contain multiple elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#tenant_ids IapSettings#tenant_ids}

---

##### `put_oauth_settings` <a name="put_oauth_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putOauthSettings"></a>

```python
def put_oauth_settings(
  login_hint: str = None,
  programmatic_clients: typing.List[str] = None
) -> None
```

###### `login_hint`<sup>Optional</sup> <a name="login_hint" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putOauthSettings.parameter.loginHint"></a>

- *Type:* str

Domain hint to send as hd=?

parameter in OAuth request flow.
Enables redirect to primary IDP by skipping Google's login screen.
(https://developers.google.com/identity/protocols/OpenIDConnect#hd-param)
Note: IAP does not verify that the id token's hd claim matches this value
since access behavior is managed by IAM policies.

* loginHint setting is not a replacement for access control. Always enforce an appropriate access policy if you want to restrict access to users outside your domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#login_hint IapSettings#login_hint}

---

###### `programmatic_clients`<sup>Optional</sup> <a name="programmatic_clients" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putOauthSettings.parameter.programmaticClients"></a>

- *Type:* typing.List[str]

List of client ids allowed to use IAP programmatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#programmatic_clients IapSettings#programmatic_clients}

---

##### `put_reauth_settings` <a name="put_reauth_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putReauthSettings"></a>

```python
def put_reauth_settings(
  max_age: str,
  method: str,
  policy_type: str
) -> None
```

###### `max_age`<sup>Required</sup> <a name="max_age" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putReauthSettings.parameter.maxAge"></a>

- *Type:* str

Reauth session lifetime, how long before a user has to reauthenticate again.

A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#max_age IapSettings#max_age}

---

###### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putReauthSettings.parameter.method"></a>

- *Type:* str

Reauth method requested. The possible values are:.

* 'LOGIN': Prompts the user to log in again.
* 'SECURE_KEY': User must use their secure key 2nd factor device.
* 'ENROLLED_SECOND_FACTORS': User can use any enabled 2nd factor. Possible values: ["LOGIN", "SECURE_KEY", "ENROLLED_SECOND_FACTORS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#method IapSettings#method}

---

###### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putReauthSettings.parameter.policyType"></a>

- *Type:* str

How IAP determines the effective policy in cases of hierarchical policies.

Policies are merged from higher in the hierarchy to lower in the hierarchy.
The possible values are:

* 'MINIMUM': This policy acts as a minimum to other policies, lower in the hierarchy.
  Effective policy may only be the same or stricter.
* 'DEFAULT': This policy acts as a default if no other reauth policy is set. Possible values: ["MINIMUM", "DEFAULT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#policy_type IapSettings#policy_type}

---

##### `put_workforce_identity_settings` <a name="put_workforce_identity_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings"></a>

```python
def put_workforce_identity_settings(
  oauth2: IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 = None,
  workforce_pools: typing.List[str] = None
) -> None
```

###### `oauth2`<sup>Optional</sup> <a name="oauth2" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings.parameter.oauth2"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

oauth2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#oauth2 IapSettings#oauth2}

---

###### `workforce_pools`<sup>Optional</sup> <a name="workforce_pools" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings.parameter.workforcePools"></a>

- *Type:* typing.List[str]

The workforce pool resources. Only one workforce pool is accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#workforce_pools IapSettings#workforce_pools}

---

##### `reset_allowed_domains_settings` <a name="reset_allowed_domains_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetAllowedDomainsSettings"></a>

```python
def reset_allowed_domains_settings() -> None
```

##### `reset_cors_settings` <a name="reset_cors_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetCorsSettings"></a>

```python
def reset_cors_settings() -> None
```

##### `reset_gcip_settings` <a name="reset_gcip_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetGcipSettings"></a>

```python
def reset_gcip_settings() -> None
```

##### `reset_identity_sources` <a name="reset_identity_sources" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetIdentitySources"></a>

```python
def reset_identity_sources() -> None
```

##### `reset_oauth_settings` <a name="reset_oauth_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetOauthSettings"></a>

```python
def reset_oauth_settings() -> None
```

##### `reset_reauth_settings` <a name="reset_reauth_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetReauthSettings"></a>

```python
def reset_reauth_settings() -> None
```

##### `reset_workforce_identity_settings` <a name="reset_workforce_identity_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetWorkforceIdentitySettings"></a>

```python
def reset_workforce_identity_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.allowedDomainsSettings">allowed_domains_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference">IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.corsSettings">cors_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference">IapSettingsAccessSettingsCorsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.gcipSettings">gcip_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference">IapSettingsAccessSettingsGcipSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.oauthSettings">oauth_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference">IapSettingsAccessSettingsOauthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.reauthSettings">reauth_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference">IapSettingsAccessSettingsReauthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.workforceIdentitySettings">workforce_identity_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference">IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.allowedDomainsSettingsInput">allowed_domains_settings_input</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings">IapSettingsAccessSettingsAllowedDomainsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.corsSettingsInput">cors_settings_input</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings">IapSettingsAccessSettingsCorsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.gcipSettingsInput">gcip_settings_input</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings">IapSettingsAccessSettingsGcipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.identitySourcesInput">identity_sources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.oauthSettingsInput">oauth_settings_input</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings">IapSettingsAccessSettingsOauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.reauthSettingsInput">reauth_settings_input</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings">IapSettingsAccessSettingsReauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.workforceIdentitySettingsInput">workforce_identity_settings_input</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings">IapSettingsAccessSettingsWorkforceIdentitySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.identitySources">identity_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_domains_settings`<sup>Required</sup> <a name="allowed_domains_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.allowedDomainsSettings"></a>

```python
allowed_domains_settings: IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference">IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference</a>

---

##### `cors_settings`<sup>Required</sup> <a name="cors_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.corsSettings"></a>

```python
cors_settings: IapSettingsAccessSettingsCorsSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference">IapSettingsAccessSettingsCorsSettingsOutputReference</a>

---

##### `gcip_settings`<sup>Required</sup> <a name="gcip_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.gcipSettings"></a>

```python
gcip_settings: IapSettingsAccessSettingsGcipSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference">IapSettingsAccessSettingsGcipSettingsOutputReference</a>

---

##### `oauth_settings`<sup>Required</sup> <a name="oauth_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.oauthSettings"></a>

```python
oauth_settings: IapSettingsAccessSettingsOauthSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference">IapSettingsAccessSettingsOauthSettingsOutputReference</a>

---

##### `reauth_settings`<sup>Required</sup> <a name="reauth_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.reauthSettings"></a>

```python
reauth_settings: IapSettingsAccessSettingsReauthSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference">IapSettingsAccessSettingsReauthSettingsOutputReference</a>

---

##### `workforce_identity_settings`<sup>Required</sup> <a name="workforce_identity_settings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.workforceIdentitySettings"></a>

```python
workforce_identity_settings: IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference">IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference</a>

---

##### `allowed_domains_settings_input`<sup>Optional</sup> <a name="allowed_domains_settings_input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.allowedDomainsSettingsInput"></a>

```python
allowed_domains_settings_input: IapSettingsAccessSettingsAllowedDomainsSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings">IapSettingsAccessSettingsAllowedDomainsSettings</a>

---

##### `cors_settings_input`<sup>Optional</sup> <a name="cors_settings_input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.corsSettingsInput"></a>

```python
cors_settings_input: IapSettingsAccessSettingsCorsSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings">IapSettingsAccessSettingsCorsSettings</a>

---

##### `gcip_settings_input`<sup>Optional</sup> <a name="gcip_settings_input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.gcipSettingsInput"></a>

```python
gcip_settings_input: IapSettingsAccessSettingsGcipSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings">IapSettingsAccessSettingsGcipSettings</a>

---

##### `identity_sources_input`<sup>Optional</sup> <a name="identity_sources_input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.identitySourcesInput"></a>

```python
identity_sources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `oauth_settings_input`<sup>Optional</sup> <a name="oauth_settings_input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.oauthSettingsInput"></a>

```python
oauth_settings_input: IapSettingsAccessSettingsOauthSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings">IapSettingsAccessSettingsOauthSettings</a>

---

##### `reauth_settings_input`<sup>Optional</sup> <a name="reauth_settings_input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.reauthSettingsInput"></a>

```python
reauth_settings_input: IapSettingsAccessSettingsReauthSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings">IapSettingsAccessSettingsReauthSettings</a>

---

##### `workforce_identity_settings_input`<sup>Optional</sup> <a name="workforce_identity_settings_input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.workforceIdentitySettingsInput"></a>

```python
workforce_identity_settings_input: IapSettingsAccessSettingsWorkforceIdentitySettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings">IapSettingsAccessSettingsWorkforceIdentitySettings</a>

---

##### `identity_sources`<sup>Required</sup> <a name="identity_sources" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.identitySources"></a>

```python
identity_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IapSettingsAccessSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a>

---


### IapSettingsAccessSettingsReauthSettingsOutputReference <a name="IapSettingsAccessSettingsReauthSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAgeInput">max_age_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.policyTypeInput">policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAge">max_age</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings">IapSettingsAccessSettingsReauthSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_age_input`<sup>Optional</sup> <a name="max_age_input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAgeInput"></a>

```python
max_age_input: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `policy_type_input`<sup>Optional</sup> <a name="policy_type_input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.policyTypeInput"></a>

```python
policy_type_input: str
```

- *Type:* str

---

##### `max_age`<sup>Required</sup> <a name="max_age" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAge"></a>

```python
max_age: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IapSettingsAccessSettingsReauthSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings">IapSettingsAccessSettingsReauthSettings</a>

---


### IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference <a name="IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretSha256">client_secret_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_secret_sha256`<sup>Required</sup> <a name="client_secret_sha256" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretSha256"></a>

```python
client_secret_sha256: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.internalValue"></a>

```python
internal_value: IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

---


### IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference <a name="IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2">put_oauth2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetOauth2">reset_oauth2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetWorkforcePools">reset_workforce_pools</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_oauth2` <a name="put_oauth2" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2"></a>

```python
def put_oauth2(
  client_id: str = None,
  client_secret: str = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2.parameter.clientId"></a>

- *Type:* str

The OAuth 2.0 client ID registered in the workforce identity federation OAuth 2.0 Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#client_id IapSettings#client_id}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2.parameter.clientSecret"></a>

- *Type:* str

Input only. The OAuth 2.0 client secret created while registering the client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#client_secret IapSettings#client_secret}

---

##### `reset_oauth2` <a name="reset_oauth2" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetOauth2"></a>

```python
def reset_oauth2() -> None
```

##### `reset_workforce_pools` <a name="reset_workforce_pools" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetWorkforcePools"></a>

```python
def reset_workforce_pools() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2">oauth2</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2Input">oauth2_input</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePoolsInput">workforce_pools_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePools">workforce_pools</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings">IapSettingsAccessSettingsWorkforceIdentitySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth2`<sup>Required</sup> <a name="oauth2" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2"></a>

```python
oauth2: IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference</a>

---

##### `oauth2_input`<sup>Optional</sup> <a name="oauth2_input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2Input"></a>

```python
oauth2_input: IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

---

##### `workforce_pools_input`<sup>Optional</sup> <a name="workforce_pools_input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePoolsInput"></a>

```python
workforce_pools_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `workforce_pools`<sup>Required</sup> <a name="workforce_pools" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePools"></a>

```python
workforce_pools: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.internalValue"></a>

```python
internal_value: IapSettingsAccessSettingsWorkforceIdentitySettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings">IapSettingsAccessSettingsWorkforceIdentitySettings</a>

---


### IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference <a name="IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetAccessDeniedPageUri">reset_access_denied_page_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetGenerateTroubleshootingUri">reset_generate_troubleshooting_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetRemediationTokenGenerationEnabled">reset_remediation_token_generation_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_denied_page_uri` <a name="reset_access_denied_page_uri" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetAccessDeniedPageUri"></a>

```python
def reset_access_denied_page_uri() -> None
```

##### `reset_generate_troubleshooting_uri` <a name="reset_generate_troubleshooting_uri" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetGenerateTroubleshootingUri"></a>

```python
def reset_generate_troubleshooting_uri() -> None
```

##### `reset_remediation_token_generation_enabled` <a name="reset_remediation_token_generation_enabled" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetRemediationTokenGenerationEnabled"></a>

```python
def reset_remediation_token_generation_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUriInput">access_denied_page_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUriInput">generate_troubleshooting_uri_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabledInput">remediation_token_generation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUri">access_denied_page_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUri">generate_troubleshooting_uri</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabled">remediation_token_generation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings">IapSettingsApplicationSettingsAccessDeniedPageSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_denied_page_uri_input`<sup>Optional</sup> <a name="access_denied_page_uri_input" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUriInput"></a>

```python
access_denied_page_uri_input: str
```

- *Type:* str

---

##### `generate_troubleshooting_uri_input`<sup>Optional</sup> <a name="generate_troubleshooting_uri_input" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUriInput"></a>

```python
generate_troubleshooting_uri_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remediation_token_generation_enabled_input`<sup>Optional</sup> <a name="remediation_token_generation_enabled_input" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabledInput"></a>

```python
remediation_token_generation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_denied_page_uri`<sup>Required</sup> <a name="access_denied_page_uri" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUri"></a>

```python
access_denied_page_uri: str
```

- *Type:* str

---

##### `generate_troubleshooting_uri`<sup>Required</sup> <a name="generate_troubleshooting_uri" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUri"></a>

```python
generate_troubleshooting_uri: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remediation_token_generation_enabled`<sup>Required</sup> <a name="remediation_token_generation_enabled" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabled"></a>

```python
remediation_token_generation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IapSettingsApplicationSettingsAccessDeniedPageSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings">IapSettingsApplicationSettingsAccessDeniedPageSettings</a>

---


### IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference <a name="IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetEnable">reset_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetOutputCredentials">reset_output_credentials</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable` <a name="reset_enable" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_output_credentials` <a name="reset_output_credentials" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetOutputCredentials"></a>

```python
def reset_output_credentials() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentialsInput">output_credentials_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentials">output_credentials</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings">IapSettingsApplicationSettingsAttributePropagationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `output_credentials_input`<sup>Optional</sup> <a name="output_credentials_input" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentialsInput"></a>

```python
output_credentials_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `output_credentials`<sup>Required</sup> <a name="output_credentials" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentials"></a>

```python
output_credentials: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IapSettingsApplicationSettingsAttributePropagationSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings">IapSettingsApplicationSettingsAttributePropagationSettings</a>

---


### IapSettingsApplicationSettingsCsmSettingsOutputReference <a name="IapSettingsApplicationSettingsCsmSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.resetRctokenAud">reset_rctoken_aud</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_rctoken_aud` <a name="reset_rctoken_aud" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.resetRctokenAud"></a>

```python
def reset_rctoken_aud() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAudInput">rctoken_aud_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAud">rctoken_aud</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings">IapSettingsApplicationSettingsCsmSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rctoken_aud_input`<sup>Optional</sup> <a name="rctoken_aud_input" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAudInput"></a>

```python
rctoken_aud_input: str
```

- *Type:* str

---

##### `rctoken_aud`<sup>Required</sup> <a name="rctoken_aud" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAud"></a>

```python
rctoken_aud: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IapSettingsApplicationSettingsCsmSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings">IapSettingsApplicationSettingsCsmSettings</a>

---


### IapSettingsApplicationSettingsOutputReference <a name="IapSettingsApplicationSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsApplicationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings">put_access_denied_page_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings">put_attribute_propagation_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putCsmSettings">put_csm_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetAccessDeniedPageSettings">reset_access_denied_page_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetAttributePropagationSettings">reset_attribute_propagation_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetCookieDomain">reset_cookie_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetCsmSettings">reset_csm_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_denied_page_settings` <a name="put_access_denied_page_settings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings"></a>

```python
def put_access_denied_page_settings(
  access_denied_page_uri: str = None,
  generate_troubleshooting_uri: typing.Union[bool, IResolvable] = None,
  remediation_token_generation_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `access_denied_page_uri`<sup>Optional</sup> <a name="access_denied_page_uri" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings.parameter.accessDeniedPageUri"></a>

- *Type:* str

The URI to be redirected to when access is denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#access_denied_page_uri IapSettings#access_denied_page_uri}

---

###### `generate_troubleshooting_uri`<sup>Optional</sup> <a name="generate_troubleshooting_uri" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings.parameter.generateTroubleshootingUri"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to generate a troubleshooting URL on access denied events to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#generate_troubleshooting_uri IapSettings#generate_troubleshooting_uri}

---

###### `remediation_token_generation_enabled`<sup>Optional</sup> <a name="remediation_token_generation_enabled" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings.parameter.remediationTokenGenerationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to generate remediation token on access denied events to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#remediation_token_generation_enabled IapSettings#remediation_token_generation_enabled}

---

##### `put_attribute_propagation_settings` <a name="put_attribute_propagation_settings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings"></a>

```python
def put_attribute_propagation_settings(
  enable: typing.Union[bool, IResolvable] = None,
  expression: str = None,
  output_credentials: typing.List[str] = None
) -> None
```

###### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the provided attribute propagation settings should be evaluated on user requests.

If set to true, attributes returned from the expression will be propagated in the set output credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#enable IapSettings#enable}

---

###### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings.parameter.expression"></a>

- *Type:* str

Raw string CEL expression.

Must return a list of attributes. A maximum of 45 attributes can
be selected. Expressions can select different attribute types from attributes:
attributes.saml_attributes, attributes.iap_attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#expression IapSettings#expression}

---

###### `output_credentials`<sup>Optional</sup> <a name="output_credentials" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings.parameter.outputCredentials"></a>

- *Type:* typing.List[str]

Which output credentials attributes selected by the CEL expression should be propagated in.

All attributes will be fully duplicated in each selected output credential.
Possible values are:

* 'HEADER': Propagate attributes in the headers with "x-goog-iap-attr-" prefix.
* 'JWT': Propagate attributes in the JWT of the form:
  "additional_claims": { "my_attribute": ["value1", "value2"] }
* 'RCTOKEN': Propagate attributes in the RCToken of the form: "
  additional_claims": { "my_attribute": ["value1", "value2"] } Possible values: ["HEADER", "JWT", "RCTOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#output_credentials IapSettings#output_credentials}

---

##### `put_csm_settings` <a name="put_csm_settings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putCsmSettings"></a>

```python
def put_csm_settings(
  rctoken_aud: str = None
) -> None
```

###### `rctoken_aud`<sup>Optional</sup> <a name="rctoken_aud" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putCsmSettings.parameter.rctokenAud"></a>

- *Type:* str

Audience claim set in the generated RCToken. This value is not validated by IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iap_settings#rctoken_aud IapSettings#rctoken_aud}

---

##### `reset_access_denied_page_settings` <a name="reset_access_denied_page_settings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetAccessDeniedPageSettings"></a>

```python
def reset_access_denied_page_settings() -> None
```

##### `reset_attribute_propagation_settings` <a name="reset_attribute_propagation_settings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetAttributePropagationSettings"></a>

```python
def reset_attribute_propagation_settings() -> None
```

##### `reset_cookie_domain` <a name="reset_cookie_domain" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetCookieDomain"></a>

```python
def reset_cookie_domain() -> None
```

##### `reset_csm_settings` <a name="reset_csm_settings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetCsmSettings"></a>

```python
def reset_csm_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettings">access_denied_page_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference">IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.attributePropagationSettings">attribute_propagation_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference">IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.csmSettings">csm_settings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference">IapSettingsApplicationSettingsCsmSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettingsInput">access_denied_page_settings_input</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings">IapSettingsApplicationSettingsAccessDeniedPageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.attributePropagationSettingsInput">attribute_propagation_settings_input</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings">IapSettingsApplicationSettingsAttributePropagationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.cookieDomainInput">cookie_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.csmSettingsInput">csm_settings_input</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings">IapSettingsApplicationSettingsCsmSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.cookieDomain">cookie_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_denied_page_settings`<sup>Required</sup> <a name="access_denied_page_settings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettings"></a>

```python
access_denied_page_settings: IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference">IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference</a>

---

##### `attribute_propagation_settings`<sup>Required</sup> <a name="attribute_propagation_settings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.attributePropagationSettings"></a>

```python
attribute_propagation_settings: IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference">IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference</a>

---

##### `csm_settings`<sup>Required</sup> <a name="csm_settings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.csmSettings"></a>

```python
csm_settings: IapSettingsApplicationSettingsCsmSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference">IapSettingsApplicationSettingsCsmSettingsOutputReference</a>

---

##### `access_denied_page_settings_input`<sup>Optional</sup> <a name="access_denied_page_settings_input" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettingsInput"></a>

```python
access_denied_page_settings_input: IapSettingsApplicationSettingsAccessDeniedPageSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings">IapSettingsApplicationSettingsAccessDeniedPageSettings</a>

---

##### `attribute_propagation_settings_input`<sup>Optional</sup> <a name="attribute_propagation_settings_input" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.attributePropagationSettingsInput"></a>

```python
attribute_propagation_settings_input: IapSettingsApplicationSettingsAttributePropagationSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings">IapSettingsApplicationSettingsAttributePropagationSettings</a>

---

##### `cookie_domain_input`<sup>Optional</sup> <a name="cookie_domain_input" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.cookieDomainInput"></a>

```python
cookie_domain_input: str
```

- *Type:* str

---

##### `csm_settings_input`<sup>Optional</sup> <a name="csm_settings_input" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.csmSettingsInput"></a>

```python
csm_settings_input: IapSettingsApplicationSettingsCsmSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings">IapSettingsApplicationSettingsCsmSettings</a>

---

##### `cookie_domain`<sup>Required</sup> <a name="cookie_domain" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.cookieDomain"></a>

```python
cookie_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IapSettingsApplicationSettings
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a>

---


### IapSettingsTimeoutsOutputReference <a name="IapSettingsTimeoutsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_settings

iapSettings.IapSettingsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts">IapSettingsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IapSettingsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts">IapSettingsTimeouts</a>]

---



