# `firebaseAppCheckAppAttestConfig` Submodule <a name="`firebaseAppCheckAppAttestConfig` Submodule" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppCheckAppAttestConfig <a name="FirebaseAppCheckAppAttestConfig" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config google_firebase_app_check_app_attest_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_check_app_attest_config

firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  id: str = None,
  project: str = None,
  timeouts: FirebaseAppCheckAppAttestConfigTimeouts = None,
  token_ttl: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id). |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#id FirebaseAppCheckAppAttestConfig#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#project FirebaseAppCheckAppAttestConfig#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts">FirebaseAppCheckAppAttestConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.tokenTtl">token_ttl</a></code> | <code>str</code> | Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.appId"></a>

- *Type:* str

The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#app_id FirebaseAppCheckAppAttestConfig#app_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#id FirebaseAppCheckAppAttestConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#project FirebaseAppCheckAppAttestConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts">FirebaseAppCheckAppAttestConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#timeouts FirebaseAppCheckAppAttestConfig#timeouts}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.tokenTtl"></a>

- *Type:* str

Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#token_ttl FirebaseAppCheckAppAttestConfig#token_ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.resetTokenTtl">reset_token_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#create FirebaseAppCheckAppAttestConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#delete FirebaseAppCheckAppAttestConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#update FirebaseAppCheckAppAttestConfig#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_token_ttl` <a name="reset_token_ttl" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.resetTokenTtl"></a>

```python
def reset_token_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FirebaseAppCheckAppAttestConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_check_app_attest_config

firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_check_app_attest_config

firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_check_app_attest_config

firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_check_app_attest_config

firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FirebaseAppCheckAppAttestConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FirebaseAppCheckAppAttestConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FirebaseAppCheckAppAttestConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirebaseAppCheckAppAttestConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference">FirebaseAppCheckAppAttestConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts">FirebaseAppCheckAppAttestConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.tokenTtlInput">token_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.tokenTtl">token_ttl</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.timeouts"></a>

```python
timeouts: FirebaseAppCheckAppAttestConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference">FirebaseAppCheckAppAttestConfigTimeoutsOutputReference</a>

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FirebaseAppCheckAppAttestConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts">FirebaseAppCheckAppAttestConfigTimeouts</a>]

---

##### `token_ttl_input`<sup>Optional</sup> <a name="token_ttl_input" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.tokenTtlInput"></a>

```python
token_ttl_input: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `token_ttl`<sup>Required</sup> <a name="token_ttl" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.tokenTtl"></a>

```python
token_ttl: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppCheckAppAttestConfigConfig <a name="FirebaseAppCheckAppAttestConfigConfig" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_check_app_attest_config

firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  id: str = None,
  project: str = None,
  timeouts: FirebaseAppCheckAppAttestConfigTimeouts = None,
  token_ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.appId">app_id</a></code> | <code>str</code> | The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id). |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#id FirebaseAppCheckAppAttestConfig#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#project FirebaseAppCheckAppAttestConfig#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts">FirebaseAppCheckAppAttestConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.tokenTtl">token_ttl</a></code> | <code>str</code> | Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#app_id FirebaseAppCheckAppAttestConfig#app_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#id FirebaseAppCheckAppAttestConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#project FirebaseAppCheckAppAttestConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.timeouts"></a>

```python
timeouts: FirebaseAppCheckAppAttestConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts">FirebaseAppCheckAppAttestConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#timeouts FirebaseAppCheckAppAttestConfig#timeouts}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.tokenTtl"></a>

```python
token_ttl: str
```

- *Type:* str

Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#token_ttl FirebaseAppCheckAppAttestConfig#token_ttl}

---

### FirebaseAppCheckAppAttestConfigTimeouts <a name="FirebaseAppCheckAppAttestConfigTimeouts" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_check_app_attest_config

firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#create FirebaseAppCheckAppAttestConfig#create}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#delete FirebaseAppCheckAppAttestConfig#delete}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#update FirebaseAppCheckAppAttestConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#create FirebaseAppCheckAppAttestConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#delete FirebaseAppCheckAppAttestConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_check_app_attest_config#update FirebaseAppCheckAppAttestConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppCheckAppAttestConfigTimeoutsOutputReference <a name="FirebaseAppCheckAppAttestConfigTimeoutsOutputReference" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_check_app_attest_config

firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts">FirebaseAppCheckAppAttestConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FirebaseAppCheckAppAttestConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts">FirebaseAppCheckAppAttestConfigTimeouts</a>]

---



