# `google_apikeys_key`

Refer to the Terraform Registory for docs: [`google_apikeys_key`](https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key).

# `apikeysKey` Submodule <a name="`apikeysKey` Submodule" id="@cdktf/provider-google.apikeysKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApikeysKey <a name="ApikeysKey" id="@cdktf/provider-google.apikeysKey.ApikeysKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key google_apikeys_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKey(
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
  display_name: str = None,
  id: str = None,
  project: str = None,
  restrictions: ApikeysKeyRestrictions = None,
  timeouts: ApikeysKeyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the key. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human-readable display name of this API key. Modifiable by user. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#id ApikeysKey#id}. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a></code> | restrictions block. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts">ApikeysKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the key.

The name must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the name must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#name ApikeysKey#name}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.displayName"></a>

- *Type:* str

Human-readable display name of this API key. Modifiable by user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#display_name ApikeysKey#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#id ApikeysKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.project"></a>

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#project ApikeysKey#project}

---

##### `restrictions`<sup>Optional</sup> <a name="restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.restrictions"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#restrictions ApikeysKey#restrictions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts">ApikeysKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#timeouts ApikeysKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.putRestrictions">put_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetRestrictions">reset_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apikeysKey.ApikeysKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.apikeysKey.ApikeysKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apikeysKey.ApikeysKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apikeysKey.ApikeysKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.apikeysKey.ApikeysKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.apikeysKey.ApikeysKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.apikeysKey.ApikeysKey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apikeysKey.ApikeysKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-google.apikeysKey.ApikeysKey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apikeysKey.ApikeysKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.apikeysKey.ApikeysKey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apikeysKey.ApikeysKey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apikeysKey.ApikeysKey.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_restrictions` <a name="put_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putRestrictions"></a>

```python
def put_restrictions(
  android_key_restrictions: ApikeysKeyRestrictionsAndroidKeyRestrictions = None,
  api_targets: typing.Union[IResolvable, typing.List[ApikeysKeyRestrictionsApiTargets]] = None,
  browser_key_restrictions: ApikeysKeyRestrictionsBrowserKeyRestrictions = None,
  ios_key_restrictions: ApikeysKeyRestrictionsIosKeyRestrictions = None,
  server_key_restrictions: ApikeysKeyRestrictionsServerKeyRestrictions = None
) -> None
```

###### `android_key_restrictions`<sup>Optional</sup> <a name="android_key_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putRestrictions.parameter.androidKeyRestrictions"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a>

android_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#android_key_restrictions ApikeysKey#android_key_restrictions}

---

###### `api_targets`<sup>Optional</sup> <a name="api_targets" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putRestrictions.parameter.apiTargets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets">ApikeysKeyRestrictionsApiTargets</a>]]

api_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#api_targets ApikeysKey#api_targets}

---

###### `browser_key_restrictions`<sup>Optional</sup> <a name="browser_key_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putRestrictions.parameter.browserKeyRestrictions"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a>

browser_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#browser_key_restrictions ApikeysKey#browser_key_restrictions}

---

###### `ios_key_restrictions`<sup>Optional</sup> <a name="ios_key_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putRestrictions.parameter.iosKeyRestrictions"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a>

ios_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#ios_key_restrictions ApikeysKey#ios_key_restrictions}

---

###### `server_key_restrictions`<sup>Optional</sup> <a name="server_key_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putRestrictions.parameter.serverKeyRestrictions"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a>

server_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#server_key_restrictions ApikeysKey#server_key_restrictions}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#create ApikeysKey#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#delete ApikeysKey#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#update ApikeysKey#update}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_restrictions` <a name="reset_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetRestrictions"></a>

```python
def reset_restrictions() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApikeysKey resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.apikeysKey.ApikeysKey.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApikeysKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apikeysKey.ApikeysKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApikeysKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApikeysKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apikeysKey.ApikeysKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApikeysKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.keyString">key_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference">ApikeysKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference">ApikeysKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.restrictionsInput">restrictions_input</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts">ApikeysKeyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_string`<sup>Required</sup> <a name="key_string" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.keyString"></a>

```python
key_string: str
```

- *Type:* str

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.restrictions"></a>

```python
restrictions: ApikeysKeyRestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference">ApikeysKeyRestrictionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.timeouts"></a>

```python
timeouts: ApikeysKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference">ApikeysKeyTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `restrictions_input`<sup>Optional</sup> <a name="restrictions_input" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.restrictionsInput"></a>

```python
restrictions_input: ApikeysKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApikeysKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts">ApikeysKeyTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApikeysKeyConfig <a name="ApikeysKeyConfig" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  display_name: str = None,
  id: str = None,
  project: str = None,
  restrictions: ApikeysKeyRestrictions = None,
  timeouts: ApikeysKeyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.name">name</a></code> | <code>str</code> | The resource name of the key. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.displayName">display_name</a></code> | <code>str</code> | Human-readable display name of this API key. Modifiable by user. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#id ApikeysKey#id}. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a></code> | restrictions block. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts">ApikeysKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the key.

The name must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the name must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#name ApikeysKey#name}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human-readable display name of this API key. Modifiable by user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#display_name ApikeysKey#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#id ApikeysKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#project ApikeysKey#project}

---

##### `restrictions`<sup>Optional</sup> <a name="restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.restrictions"></a>

```python
restrictions: ApikeysKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#restrictions ApikeysKey#restrictions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.timeouts"></a>

```python
timeouts: ApikeysKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts">ApikeysKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#timeouts ApikeysKey#timeouts}

---

### ApikeysKeyRestrictions <a name="ApikeysKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKeyRestrictions(
  android_key_restrictions: ApikeysKeyRestrictionsAndroidKeyRestrictions = None,
  api_targets: typing.Union[IResolvable, typing.List[ApikeysKeyRestrictionsApiTargets]] = None,
  browser_key_restrictions: ApikeysKeyRestrictionsBrowserKeyRestrictions = None,
  ios_key_restrictions: ApikeysKeyRestrictionsIosKeyRestrictions = None,
  server_key_restrictions: ApikeysKeyRestrictionsServerKeyRestrictions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.androidKeyRestrictions">android_key_restrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a></code> | android_key_restrictions block. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.apiTargets">api_targets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets">ApikeysKeyRestrictionsApiTargets</a>]]</code> | api_targets block. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.browserKeyRestrictions">browser_key_restrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a></code> | browser_key_restrictions block. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.iosKeyRestrictions">ios_key_restrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a></code> | ios_key_restrictions block. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.serverKeyRestrictions">server_key_restrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a></code> | server_key_restrictions block. |

---

##### `android_key_restrictions`<sup>Optional</sup> <a name="android_key_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.androidKeyRestrictions"></a>

```python
android_key_restrictions: ApikeysKeyRestrictionsAndroidKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a>

android_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#android_key_restrictions ApikeysKey#android_key_restrictions}

---

##### `api_targets`<sup>Optional</sup> <a name="api_targets" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.apiTargets"></a>

```python
api_targets: typing.Union[IResolvable, typing.List[ApikeysKeyRestrictionsApiTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets">ApikeysKeyRestrictionsApiTargets</a>]]

api_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#api_targets ApikeysKey#api_targets}

---

##### `browser_key_restrictions`<sup>Optional</sup> <a name="browser_key_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.browserKeyRestrictions"></a>

```python
browser_key_restrictions: ApikeysKeyRestrictionsBrowserKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a>

browser_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#browser_key_restrictions ApikeysKey#browser_key_restrictions}

---

##### `ios_key_restrictions`<sup>Optional</sup> <a name="ios_key_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.iosKeyRestrictions"></a>

```python
ios_key_restrictions: ApikeysKeyRestrictionsIosKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a>

ios_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#ios_key_restrictions ApikeysKey#ios_key_restrictions}

---

##### `server_key_restrictions`<sup>Optional</sup> <a name="server_key_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.serverKeyRestrictions"></a>

```python
server_key_restrictions: ApikeysKeyRestrictionsServerKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a>

server_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#server_key_restrictions ApikeysKey#server_key_restrictions}

---

### ApikeysKeyRestrictionsAndroidKeyRestrictions <a name="ApikeysKeyRestrictionsAndroidKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions(
  allowed_applications: typing.Union[IResolvable, typing.List[ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions.property.allowedApplications">allowed_applications</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>]]</code> | allowed_applications block. |

---

##### `allowed_applications`<sup>Required</sup> <a name="allowed_applications" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions.property.allowedApplications"></a>

```python
allowed_applications: typing.Union[IResolvable, typing.List[ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>]]

allowed_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#allowed_applications ApikeysKey#allowed_applications}

---

### ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications <a name="ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications(
  package_name: str,
  sha1_fingerprint: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.packageName">package_name</a></code> | <code>str</code> | The package name of the application. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.sha1Fingerprint">sha1_fingerprint</a></code> | <code>str</code> | The SHA1 fingerprint of the application. |

---

##### `package_name`<sup>Required</sup> <a name="package_name" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.packageName"></a>

```python
package_name: str
```

- *Type:* str

The package name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#package_name ApikeysKey#package_name}

---

##### `sha1_fingerprint`<sup>Required</sup> <a name="sha1_fingerprint" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.sha1Fingerprint"></a>

```python
sha1_fingerprint: str
```

- *Type:* str

The SHA1 fingerprint of the application.

For example, both sha1 formats are acceptable : DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09 or DA39A3EE5E6B4B0D3255BFEF95601890AFD80709. Output format is the latter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#sha1_fingerprint ApikeysKey#sha1_fingerprint}

---

### ApikeysKeyRestrictionsApiTargets <a name="ApikeysKeyRestrictionsApiTargets" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKeyRestrictionsApiTargets(
  service: str,
  methods: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets.property.service">service</a></code> | <code>str</code> | The service for this restriction. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets.property.methods">methods</a></code> | <code>typing.List[str]</code> | Optional. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets.property.service"></a>

```python
service: str
```

- *Type:* str

The service for this restriction.

It should be the canonical service name, for example: `translate.googleapis.com`. You can use `gcloud services list` to get a list of services that are enabled in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#service ApikeysKey#service}

---

##### `methods`<sup>Optional</sup> <a name="methods" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

List of one or more methods that can be called. If empty, all methods for the service are allowed. A wildcard (*) can be used as the last symbol. Valid examples: `google.cloud.translate.v2.TranslateService.GetSupportedLanguage` `TranslateText` `Get*` `translate.googleapis.com.Get*`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#methods ApikeysKey#methods}

---

### ApikeysKeyRestrictionsBrowserKeyRestrictions <a name="ApikeysKeyRestrictionsBrowserKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions(
  allowed_referrers: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions.property.allowedReferrers">allowed_referrers</a></code> | <code>typing.List[str]</code> | A list of regular expressions for the referrer URLs that are allowed to make API calls with this key. |

---

##### `allowed_referrers`<sup>Required</sup> <a name="allowed_referrers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions.property.allowedReferrers"></a>

```python
allowed_referrers: typing.List[str]
```

- *Type:* typing.List[str]

A list of regular expressions for the referrer URLs that are allowed to make API calls with this key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#allowed_referrers ApikeysKey#allowed_referrers}

---

### ApikeysKeyRestrictionsIosKeyRestrictions <a name="ApikeysKeyRestrictionsIosKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions(
  allowed_bundle_ids: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions.property.allowedBundleIds">allowed_bundle_ids</a></code> | <code>typing.List[str]</code> | A list of bundle IDs that are allowed when making API calls with this key. |

---

##### `allowed_bundle_ids`<sup>Required</sup> <a name="allowed_bundle_ids" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions.property.allowedBundleIds"></a>

```python
allowed_bundle_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of bundle IDs that are allowed when making API calls with this key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#allowed_bundle_ids ApikeysKey#allowed_bundle_ids}

---

### ApikeysKeyRestrictionsServerKeyRestrictions <a name="ApikeysKeyRestrictionsServerKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions(
  allowed_ips: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions.property.allowedIps">allowed_ips</a></code> | <code>typing.List[str]</code> | A list of the caller IP addresses that are allowed to make API calls with this key. |

---

##### `allowed_ips`<sup>Required</sup> <a name="allowed_ips" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions.property.allowedIps"></a>

```python
allowed_ips: typing.List[str]
```

- *Type:* typing.List[str]

A list of the caller IP addresses that are allowed to make API calls with this key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#allowed_ips ApikeysKey#allowed_ips}

---

### ApikeysKeyTimeouts <a name="ApikeysKeyTimeouts" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKeyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#create ApikeysKey#create}. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#delete ApikeysKey#delete}. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#update ApikeysKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#create ApikeysKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#delete ApikeysKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#update ApikeysKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList <a name="ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>]]

---


### ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference <a name="ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageNameInput">package_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1FingerprintInput">sha1_fingerprint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageName">package_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1Fingerprint">sha1_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `package_name_input`<sup>Optional</sup> <a name="package_name_input" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageNameInput"></a>

```python
package_name_input: str
```

- *Type:* str

---

##### `sha1_fingerprint_input`<sup>Optional</sup> <a name="sha1_fingerprint_input" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1FingerprintInput"></a>

```python
sha1_fingerprint_input: str
```

- *Type:* str

---

##### `package_name`<sup>Required</sup> <a name="package_name" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageName"></a>

```python
package_name: str
```

- *Type:* str

---

##### `sha1_fingerprint`<sup>Required</sup> <a name="sha1_fingerprint" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1Fingerprint"></a>

```python
sha1_fingerprint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>]

---


### ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference <a name="ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.putAllowedApplications">put_allowed_applications</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allowed_applications` <a name="put_allowed_applications" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.putAllowedApplications"></a>

```python
def put_allowed_applications(
  value: typing.Union[IResolvable, typing.List[ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.putAllowedApplications.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplications">allowed_applications</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplicationsInput">allowed_applications_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_applications`<sup>Required</sup> <a name="allowed_applications" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplications"></a>

```python
allowed_applications: ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList</a>

---

##### `allowed_applications_input`<sup>Optional</sup> <a name="allowed_applications_input" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplicationsInput"></a>

```python
allowed_applications_input: typing.Union[IResolvable, typing.List[ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.internalValue"></a>

```python
internal_value: ApikeysKeyRestrictionsAndroidKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a>

---


### ApikeysKeyRestrictionsApiTargetsList <a name="ApikeysKeyRestrictionsApiTargetsList" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKeyRestrictionsApiTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApikeysKeyRestrictionsApiTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets">ApikeysKeyRestrictionsApiTargets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApikeysKeyRestrictionsApiTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets">ApikeysKeyRestrictionsApiTargets</a>]]

---


### ApikeysKeyRestrictionsApiTargetsOutputReference <a name="ApikeysKeyRestrictionsApiTargetsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.resetMethods">reset_methods</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_methods` <a name="reset_methods" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.resetMethods"></a>

```python
def reset_methods() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.methodsInput">methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.methods">methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets">ApikeysKeyRestrictionsApiTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `methods_input`<sup>Optional</sup> <a name="methods_input" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.methodsInput"></a>

```python
methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApikeysKeyRestrictionsApiTargets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets">ApikeysKeyRestrictionsApiTargets</a>]

---


### ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference <a name="ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrersInput">allowed_referrers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrers">allowed_referrers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_referrers_input`<sup>Optional</sup> <a name="allowed_referrers_input" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrersInput"></a>

```python
allowed_referrers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_referrers`<sup>Required</sup> <a name="allowed_referrers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrers"></a>

```python
allowed_referrers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.internalValue"></a>

```python
internal_value: ApikeysKeyRestrictionsBrowserKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a>

---


### ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference <a name="ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIdsInput">allowed_bundle_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIds">allowed_bundle_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_bundle_ids_input`<sup>Optional</sup> <a name="allowed_bundle_ids_input" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIdsInput"></a>

```python
allowed_bundle_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_bundle_ids`<sup>Required</sup> <a name="allowed_bundle_ids" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIds"></a>

```python
allowed_bundle_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.internalValue"></a>

```python
internal_value: ApikeysKeyRestrictionsIosKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a>

---


### ApikeysKeyRestrictionsOutputReference <a name="ApikeysKeyRestrictionsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKeyRestrictionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putAndroidKeyRestrictions">put_android_key_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putApiTargets">put_api_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putBrowserKeyRestrictions">put_browser_key_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putIosKeyRestrictions">put_ios_key_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putServerKeyRestrictions">put_server_key_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetAndroidKeyRestrictions">reset_android_key_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetApiTargets">reset_api_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetBrowserKeyRestrictions">reset_browser_key_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetIosKeyRestrictions">reset_ios_key_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetServerKeyRestrictions">reset_server_key_restrictions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_android_key_restrictions` <a name="put_android_key_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putAndroidKeyRestrictions"></a>

```python
def put_android_key_restrictions(
  allowed_applications: typing.Union[IResolvable, typing.List[ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications]]
) -> None
```

###### `allowed_applications`<sup>Required</sup> <a name="allowed_applications" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putAndroidKeyRestrictions.parameter.allowedApplications"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications</a>]]

allowed_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#allowed_applications ApikeysKey#allowed_applications}

---

##### `put_api_targets` <a name="put_api_targets" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putApiTargets"></a>

```python
def put_api_targets(
  value: typing.Union[IResolvable, typing.List[ApikeysKeyRestrictionsApiTargets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putApiTargets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets">ApikeysKeyRestrictionsApiTargets</a>]]

---

##### `put_browser_key_restrictions` <a name="put_browser_key_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putBrowserKeyRestrictions"></a>

```python
def put_browser_key_restrictions(
  allowed_referrers: typing.List[str]
) -> None
```

###### `allowed_referrers`<sup>Required</sup> <a name="allowed_referrers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putBrowserKeyRestrictions.parameter.allowedReferrers"></a>

- *Type:* typing.List[str]

A list of regular expressions for the referrer URLs that are allowed to make API calls with this key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#allowed_referrers ApikeysKey#allowed_referrers}

---

##### `put_ios_key_restrictions` <a name="put_ios_key_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putIosKeyRestrictions"></a>

```python
def put_ios_key_restrictions(
  allowed_bundle_ids: typing.List[str]
) -> None
```

###### `allowed_bundle_ids`<sup>Required</sup> <a name="allowed_bundle_ids" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putIosKeyRestrictions.parameter.allowedBundleIds"></a>

- *Type:* typing.List[str]

A list of bundle IDs that are allowed when making API calls with this key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#allowed_bundle_ids ApikeysKey#allowed_bundle_ids}

---

##### `put_server_key_restrictions` <a name="put_server_key_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putServerKeyRestrictions"></a>

```python
def put_server_key_restrictions(
  allowed_ips: typing.List[str]
) -> None
```

###### `allowed_ips`<sup>Required</sup> <a name="allowed_ips" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putServerKeyRestrictions.parameter.allowedIps"></a>

- *Type:* typing.List[str]

A list of the caller IP addresses that are allowed to make API calls with this key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/apikeys_key#allowed_ips ApikeysKey#allowed_ips}

---

##### `reset_android_key_restrictions` <a name="reset_android_key_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetAndroidKeyRestrictions"></a>

```python
def reset_android_key_restrictions() -> None
```

##### `reset_api_targets` <a name="reset_api_targets" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetApiTargets"></a>

```python
def reset_api_targets() -> None
```

##### `reset_browser_key_restrictions` <a name="reset_browser_key_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetBrowserKeyRestrictions"></a>

```python
def reset_browser_key_restrictions() -> None
```

##### `reset_ios_key_restrictions` <a name="reset_ios_key_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetIosKeyRestrictions"></a>

```python
def reset_ios_key_restrictions() -> None
```

##### `reset_server_key_restrictions` <a name="reset_server_key_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetServerKeyRestrictions"></a>

```python
def reset_server_key_restrictions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictions">android_key_restrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference">ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.apiTargets">api_targets</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList">ApikeysKeyRestrictionsApiTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictions">browser_key_restrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference">ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictions">ios_key_restrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference">ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictions">server_key_restrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference">ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictionsInput">android_key_restrictions_input</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.apiTargetsInput">api_targets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets">ApikeysKeyRestrictionsApiTargets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictionsInput">browser_key_restrictions_input</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictionsInput">ios_key_restrictions_input</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictionsInput">server_key_restrictions_input</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `android_key_restrictions`<sup>Required</sup> <a name="android_key_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictions"></a>

```python
android_key_restrictions: ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference">ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference</a>

---

##### `api_targets`<sup>Required</sup> <a name="api_targets" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.apiTargets"></a>

```python
api_targets: ApikeysKeyRestrictionsApiTargetsList
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList">ApikeysKeyRestrictionsApiTargetsList</a>

---

##### `browser_key_restrictions`<sup>Required</sup> <a name="browser_key_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictions"></a>

```python
browser_key_restrictions: ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference">ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference</a>

---

##### `ios_key_restrictions`<sup>Required</sup> <a name="ios_key_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictions"></a>

```python
ios_key_restrictions: ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference">ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference</a>

---

##### `server_key_restrictions`<sup>Required</sup> <a name="server_key_restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictions"></a>

```python
server_key_restrictions: ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference">ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference</a>

---

##### `android_key_restrictions_input`<sup>Optional</sup> <a name="android_key_restrictions_input" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictionsInput"></a>

```python
android_key_restrictions_input: ApikeysKeyRestrictionsAndroidKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a>

---

##### `api_targets_input`<sup>Optional</sup> <a name="api_targets_input" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.apiTargetsInput"></a>

```python
api_targets_input: typing.Union[IResolvable, typing.List[ApikeysKeyRestrictionsApiTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets">ApikeysKeyRestrictionsApiTargets</a>]]

---

##### `browser_key_restrictions_input`<sup>Optional</sup> <a name="browser_key_restrictions_input" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictionsInput"></a>

```python
browser_key_restrictions_input: ApikeysKeyRestrictionsBrowserKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a>

---

##### `ios_key_restrictions_input`<sup>Optional</sup> <a name="ios_key_restrictions_input" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictionsInput"></a>

```python
ios_key_restrictions_input: ApikeysKeyRestrictionsIosKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a>

---

##### `server_key_restrictions_input`<sup>Optional</sup> <a name="server_key_restrictions_input" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictionsInput"></a>

```python
server_key_restrictions_input: ApikeysKeyRestrictionsServerKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.internalValue"></a>

```python
internal_value: ApikeysKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a>

---


### ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference <a name="ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIpsInput">allowed_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIps">allowed_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_ips_input`<sup>Optional</sup> <a name="allowed_ips_input" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIpsInput"></a>

```python
allowed_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_ips`<sup>Required</sup> <a name="allowed_ips" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIps"></a>

```python
allowed_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.internalValue"></a>

```python
internal_value: ApikeysKeyRestrictionsServerKeyRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a>

---


### ApikeysKeyTimeoutsOutputReference <a name="ApikeysKeyTimeoutsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apikeys_key

apikeysKey.ApikeysKeyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts">ApikeysKeyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApikeysKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts">ApikeysKeyTimeouts</a>]

---



