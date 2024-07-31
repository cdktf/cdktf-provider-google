# `identityPlatformProjectDefaultConfig` Submodule <a name="`identityPlatformProjectDefaultConfig` Submodule" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformProjectDefaultConfig <a name="IdentityPlatformProjectDefaultConfig" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config google_identity_platform_project_default_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_project_default_config

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  project: str = None,
  sign_in: IdentityPlatformProjectDefaultConfigSignIn = None,
  timeouts: IdentityPlatformProjectDefaultConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#id IdentityPlatformProjectDefaultConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#project IdentityPlatformProjectDefaultConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.signIn">sign_in</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#id IdentityPlatformProjectDefaultConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#project IdentityPlatformProjectDefaultConfig#project}.

---

##### `sign_in`<sup>Optional</sup> <a name="sign_in" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.signIn"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#sign_in IdentityPlatformProjectDefaultConfig#sign_in}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#timeouts IdentityPlatformProjectDefaultConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putSignIn">put_sign_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetSignIn">reset_sign_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_sign_in` <a name="put_sign_in" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putSignIn"></a>

```python
def put_sign_in(
  allow_duplicate_emails: typing.Union[bool, IResolvable] = None,
  anonymous: IdentityPlatformProjectDefaultConfigSignInAnonymous = None,
  email: IdentityPlatformProjectDefaultConfigSignInEmail = None,
  phone_number: IdentityPlatformProjectDefaultConfigSignInPhoneNumber = None
) -> None
```

###### `allow_duplicate_emails`<sup>Optional</sup> <a name="allow_duplicate_emails" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putSignIn.parameter.allowDuplicateEmails"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow more than one account to have the same email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#allow_duplicate_emails IdentityPlatformProjectDefaultConfig#allow_duplicate_emails}

---

###### `anonymous`<sup>Optional</sup> <a name="anonymous" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putSignIn.parameter.anonymous"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a>

anonymous block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#anonymous IdentityPlatformProjectDefaultConfig#anonymous}

---

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putSignIn.parameter.email"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#email IdentityPlatformProjectDefaultConfig#email}

---

###### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putSignIn.parameter.phoneNumber"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

phone_number block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#phone_number IdentityPlatformProjectDefaultConfig#phone_number}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#create IdentityPlatformProjectDefaultConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#delete IdentityPlatformProjectDefaultConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#update IdentityPlatformProjectDefaultConfig#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_sign_in` <a name="reset_sign_in" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetSignIn"></a>

```python
def reset_sign_in() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityPlatformProjectDefaultConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_project_default_config

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_project_default_config

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_project_default_config

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_project_default_config

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityPlatformProjectDefaultConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityPlatformProjectDefaultConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityPlatformProjectDefaultConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityPlatformProjectDefaultConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.signIn">sign_in</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference">IdentityPlatformProjectDefaultConfigSignInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference">IdentityPlatformProjectDefaultConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.signInInput">sign_in_input</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sign_in`<sup>Required</sup> <a name="sign_in" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.signIn"></a>

```python
sign_in: IdentityPlatformProjectDefaultConfigSignInOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference">IdentityPlatformProjectDefaultConfigSignInOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.timeouts"></a>

```python
timeouts: IdentityPlatformProjectDefaultConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference">IdentityPlatformProjectDefaultConfigTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `sign_in_input`<sup>Optional</sup> <a name="sign_in_input" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.signInInput"></a>

```python
sign_in_input: IdentityPlatformProjectDefaultConfigSignIn
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IdentityPlatformProjectDefaultConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformProjectDefaultConfigConfig <a name="IdentityPlatformProjectDefaultConfigConfig" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_project_default_config

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  project: str = None,
  sign_in: IdentityPlatformProjectDefaultConfigSignIn = None,
  timeouts: IdentityPlatformProjectDefaultConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#id IdentityPlatformProjectDefaultConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#project IdentityPlatformProjectDefaultConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.signIn">sign_in</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#id IdentityPlatformProjectDefaultConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#project IdentityPlatformProjectDefaultConfig#project}.

---

##### `sign_in`<sup>Optional</sup> <a name="sign_in" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.signIn"></a>

```python
sign_in: IdentityPlatformProjectDefaultConfigSignIn
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#sign_in IdentityPlatformProjectDefaultConfig#sign_in}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.timeouts"></a>

```python
timeouts: IdentityPlatformProjectDefaultConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#timeouts IdentityPlatformProjectDefaultConfig#timeouts}

---

### IdentityPlatformProjectDefaultConfigSignIn <a name="IdentityPlatformProjectDefaultConfigSignIn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_project_default_config

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn(
  allow_duplicate_emails: typing.Union[bool, IResolvable] = None,
  anonymous: IdentityPlatformProjectDefaultConfigSignInAnonymous = None,
  email: IdentityPlatformProjectDefaultConfigSignInEmail = None,
  phone_number: IdentityPlatformProjectDefaultConfigSignInPhoneNumber = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.allowDuplicateEmails">allow_duplicate_emails</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to allow more than one account to have the same email. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.anonymous">anonymous</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a></code> | anonymous block. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.email">email</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a></code> | email block. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.phoneNumber">phone_number</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a></code> | phone_number block. |

---

##### `allow_duplicate_emails`<sup>Optional</sup> <a name="allow_duplicate_emails" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.allowDuplicateEmails"></a>

```python
allow_duplicate_emails: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow more than one account to have the same email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#allow_duplicate_emails IdentityPlatformProjectDefaultConfig#allow_duplicate_emails}

---

##### `anonymous`<sup>Optional</sup> <a name="anonymous" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.anonymous"></a>

```python
anonymous: IdentityPlatformProjectDefaultConfigSignInAnonymous
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a>

anonymous block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#anonymous IdentityPlatformProjectDefaultConfig#anonymous}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.email"></a>

```python
email: IdentityPlatformProjectDefaultConfigSignInEmail
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#email IdentityPlatformProjectDefaultConfig#email}

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.phoneNumber"></a>

```python
phone_number: IdentityPlatformProjectDefaultConfigSignInPhoneNumber
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

phone_number block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#phone_number IdentityPlatformProjectDefaultConfig#phone_number}

---

### IdentityPlatformProjectDefaultConfigSignInAnonymous <a name="IdentityPlatformProjectDefaultConfigSignInAnonymous" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_project_default_config

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether anonymous user auth is enabled for the project or not. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether anonymous user auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#enabled IdentityPlatformProjectDefaultConfig#enabled}

---

### IdentityPlatformProjectDefaultConfigSignInEmail <a name="IdentityPlatformProjectDefaultConfigSignInEmail" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_project_default_config

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail(
  enabled: typing.Union[bool, IResolvable] = None,
  password_required: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether email auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail.property.passwordRequired">password_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether a password is required for email auth or not. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether email auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#enabled IdentityPlatformProjectDefaultConfig#enabled}

---

##### `password_required`<sup>Optional</sup> <a name="password_required" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail.property.passwordRequired"></a>

```python
password_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether a password is required for email auth or not.

If true, both an email and
password must be provided to sign in. If false, a user may sign in via either
email/password or email link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#password_required IdentityPlatformProjectDefaultConfig#password_required}

---

### IdentityPlatformProjectDefaultConfigSignInHashConfig <a name="IdentityPlatformProjectDefaultConfigSignInHashConfig" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_project_default_config

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfig()
```


### IdentityPlatformProjectDefaultConfigSignInPhoneNumber <a name="IdentityPlatformProjectDefaultConfigSignInPhoneNumber" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_project_default_config

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber(
  enabled: typing.Union[bool, IResolvable] = None,
  test_phone_numbers: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether phone number auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.testPhoneNumbers">test_phone_numbers</a></code> | <code>typing.Mapping[str]</code> | A map of <test phone number, fake code> that can be used for phone auth testing. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether phone number auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#enabled IdentityPlatformProjectDefaultConfig#enabled}

---

##### `test_phone_numbers`<sup>Optional</sup> <a name="test_phone_numbers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.testPhoneNumbers"></a>

```python
test_phone_numbers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of <test phone number, fake code> that can be used for phone auth testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#test_phone_numbers IdentityPlatformProjectDefaultConfig#test_phone_numbers}

---

### IdentityPlatformProjectDefaultConfigTimeouts <a name="IdentityPlatformProjectDefaultConfigTimeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_project_default_config

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#create IdentityPlatformProjectDefaultConfig#create}. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#delete IdentityPlatformProjectDefaultConfig#delete}. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#update IdentityPlatformProjectDefaultConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#create IdentityPlatformProjectDefaultConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#delete IdentityPlatformProjectDefaultConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#update IdentityPlatformProjectDefaultConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference <a name="IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_project_default_config

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.internalValue"></a>

```python
internal_value: IdentityPlatformProjectDefaultConfigSignInAnonymous
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a>

---


### IdentityPlatformProjectDefaultConfigSignInEmailOutputReference <a name="IdentityPlatformProjectDefaultConfigSignInEmailOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_project_default_config

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetPasswordRequired">reset_password_required</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_password_required` <a name="reset_password_required" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetPasswordRequired"></a>

```python
def reset_password_required() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequiredInput">password_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequired">password_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_required_input`<sup>Optional</sup> <a name="password_required_input" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequiredInput"></a>

```python
password_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_required`<sup>Required</sup> <a name="password_required" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequired"></a>

```python
password_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.internalValue"></a>

```python
internal_value: IdentityPlatformProjectDefaultConfigSignInEmail
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a>

---


### IdentityPlatformProjectDefaultConfigSignInHashConfigList <a name="IdentityPlatformProjectDefaultConfigSignInHashConfigList" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_project_default_config

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference <a name="IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_project_default_config

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.memoryCost">memory_cost</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.rounds">rounds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.saltSeparator">salt_separator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.signerKey">signer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfig">IdentityPlatformProjectDefaultConfigSignInHashConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `memory_cost`<sup>Required</sup> <a name="memory_cost" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.memoryCost"></a>

```python
memory_cost: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rounds`<sup>Required</sup> <a name="rounds" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.rounds"></a>

```python
rounds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `salt_separator`<sup>Required</sup> <a name="salt_separator" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.saltSeparator"></a>

```python
salt_separator: str
```

- *Type:* str

---

##### `signer_key`<sup>Required</sup> <a name="signer_key" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.signerKey"></a>

```python
signer_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.internalValue"></a>

```python
internal_value: IdentityPlatformProjectDefaultConfigSignInHashConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfig">IdentityPlatformProjectDefaultConfigSignInHashConfig</a>

---


### IdentityPlatformProjectDefaultConfigSignInOutputReference <a name="IdentityPlatformProjectDefaultConfigSignInOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_project_default_config

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putAnonymous">put_anonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail">put_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber">put_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetAllowDuplicateEmails">reset_allow_duplicate_emails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetAnonymous">reset_anonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_anonymous` <a name="put_anonymous" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putAnonymous"></a>

```python
def put_anonymous(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putAnonymous.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether anonymous user auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#enabled IdentityPlatformProjectDefaultConfig#enabled}

---

##### `put_email` <a name="put_email" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail"></a>

```python
def put_email(
  enabled: typing.Union[bool, IResolvable] = None,
  password_required: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether email auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#enabled IdentityPlatformProjectDefaultConfig#enabled}

---

###### `password_required`<sup>Optional</sup> <a name="password_required" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail.parameter.passwordRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether a password is required for email auth or not.

If true, both an email and
password must be provided to sign in. If false, a user may sign in via either
email/password or email link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#password_required IdentityPlatformProjectDefaultConfig#password_required}

---

##### `put_phone_number` <a name="put_phone_number" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber"></a>

```python
def put_phone_number(
  enabled: typing.Union[bool, IResolvable] = None,
  test_phone_numbers: typing.Mapping[str] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether phone number auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#enabled IdentityPlatformProjectDefaultConfig#enabled}

---

###### `test_phone_numbers`<sup>Optional</sup> <a name="test_phone_numbers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber.parameter.testPhoneNumbers"></a>

- *Type:* typing.Mapping[str]

A map of <test phone number, fake code> that can be used for phone auth testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/identity_platform_project_default_config#test_phone_numbers IdentityPlatformProjectDefaultConfig#test_phone_numbers}

---

##### `reset_allow_duplicate_emails` <a name="reset_allow_duplicate_emails" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetAllowDuplicateEmails"></a>

```python
def reset_allow_duplicate_emails() -> None
```

##### `reset_anonymous` <a name="reset_anonymous" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetAnonymous"></a>

```python
def reset_anonymous() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymous">anonymous</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference">IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.email">email</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference">IdentityPlatformProjectDefaultConfigSignInEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.hashConfig">hash_config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList">IdentityPlatformProjectDefaultConfigSignInHashConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumber">phone_number</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference">IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmailsInput">allow_duplicate_emails_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymousInput">anonymous_input</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.emailInput">email_input</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmails">allow_duplicate_emails</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `anonymous`<sup>Required</sup> <a name="anonymous" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymous"></a>

```python
anonymous: IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference">IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference</a>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.email"></a>

```python
email: IdentityPlatformProjectDefaultConfigSignInEmailOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference">IdentityPlatformProjectDefaultConfigSignInEmailOutputReference</a>

---

##### `hash_config`<sup>Required</sup> <a name="hash_config" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.hashConfig"></a>

```python
hash_config: IdentityPlatformProjectDefaultConfigSignInHashConfigList
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList">IdentityPlatformProjectDefaultConfigSignInHashConfigList</a>

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumber"></a>

```python
phone_number: IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference">IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference</a>

---

##### `allow_duplicate_emails_input`<sup>Optional</sup> <a name="allow_duplicate_emails_input" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmailsInput"></a>

```python
allow_duplicate_emails_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `anonymous_input`<sup>Optional</sup> <a name="anonymous_input" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymousInput"></a>

```python
anonymous_input: IdentityPlatformProjectDefaultConfigSignInAnonymous
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a>

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.emailInput"></a>

```python
email_input: IdentityPlatformProjectDefaultConfigSignInEmail
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a>

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: IdentityPlatformProjectDefaultConfigSignInPhoneNumber
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

---

##### `allow_duplicate_emails`<sup>Required</sup> <a name="allow_duplicate_emails" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmails"></a>

```python
allow_duplicate_emails: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.internalValue"></a>

```python
internal_value: IdentityPlatformProjectDefaultConfigSignIn
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a>

---


### IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference <a name="IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_project_default_config

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers">reset_test_phone_numbers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_test_phone_numbers` <a name="reset_test_phone_numbers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers"></a>

```python
def reset_test_phone_numbers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput">test_phone_numbers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers">test_phone_numbers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `test_phone_numbers_input`<sup>Optional</sup> <a name="test_phone_numbers_input" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput"></a>

```python
test_phone_numbers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `test_phone_numbers`<sup>Required</sup> <a name="test_phone_numbers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers"></a>

```python
test_phone_numbers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.internalValue"></a>

```python
internal_value: IdentityPlatformProjectDefaultConfigSignInPhoneNumber
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

---


### IdentityPlatformProjectDefaultConfigTimeoutsOutputReference <a name="IdentityPlatformProjectDefaultConfigTimeoutsOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import identity_platform_project_default_config

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityPlatformProjectDefaultConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a>]

---



