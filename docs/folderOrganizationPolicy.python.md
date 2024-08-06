# `folderOrganizationPolicy` Submodule <a name="`folderOrganizationPolicy` Submodule" id="@cdktf/provider-google.folderOrganizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FolderOrganizationPolicy <a name="FolderOrganizationPolicy" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy google_folder_organization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import folder_organization_policy

folderOrganizationPolicy.FolderOrganizationPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  constraint: str,
  folder: str,
  boolean_policy: FolderOrganizationPolicyBooleanPolicy = None,
  id: str = None,
  list_policy: FolderOrganizationPolicyListPolicy = None,
  restore_policy: FolderOrganizationPolicyRestorePolicy = None,
  timeouts: FolderOrganizationPolicyTimeouts = None,
  version: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.constraint">constraint</a></code> | <code>str</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.folder">folder</a></code> | <code>str</code> | The resource name of the folder to set the policy for. Its format is folders/{folder_id}. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.booleanPolicy">boolean_policy</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#id FolderOrganizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.listPolicy">list_policy</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.restorePolicy">restore_policy</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.version">version</a></code> | <code>typing.Union[int, float]</code> | Version of the Policy. Default version is 0. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.constraint"></a>

- *Type:* str

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#constraint FolderOrganizationPolicy#constraint}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.folder"></a>

- *Type:* str

The resource name of the folder to set the policy for. Its format is folders/{folder_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#folder FolderOrganizationPolicy#folder}

---

##### `boolean_policy`<sup>Optional</sup> <a name="boolean_policy" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.booleanPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#boolean_policy FolderOrganizationPolicy#boolean_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#id FolderOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `list_policy`<sup>Optional</sup> <a name="list_policy" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.listPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#list_policy FolderOrganizationPolicy#list_policy}

---

##### `restore_policy`<sup>Optional</sup> <a name="restore_policy" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.restorePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#restore_policy FolderOrganizationPolicy#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#timeouts FolderOrganizationPolicy#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.version"></a>

- *Type:* typing.Union[int, float]

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#version FolderOrganizationPolicy#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putBooleanPolicy">put_boolean_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putListPolicy">put_list_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putRestorePolicy">put_restore_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetBooleanPolicy">reset_boolean_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetListPolicy">reset_list_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetRestorePolicy">reset_restore_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_boolean_policy` <a name="put_boolean_policy" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putBooleanPolicy"></a>

```python
def put_boolean_policy(
  enforced: typing.Union[bool, IResolvable]
) -> None
```

###### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putBooleanPolicy.parameter.enforced"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#enforced FolderOrganizationPolicy#enforced}

---

##### `put_list_policy` <a name="put_list_policy" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putListPolicy"></a>

```python
def put_list_policy(
  allow: FolderOrganizationPolicyListPolicyAllow = None,
  deny: FolderOrganizationPolicyListPolicyDeny = None,
  inherit_from_parent: typing.Union[bool, IResolvable] = None,
  suggested_value: str = None
) -> None
```

###### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putListPolicy.parameter.allow"></a>

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow">FolderOrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#allow FolderOrganizationPolicy#allow}

---

###### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putListPolicy.parameter.deny"></a>

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny">FolderOrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#deny FolderOrganizationPolicy#deny}

---

###### `inherit_from_parent`<sup>Optional</sup> <a name="inherit_from_parent" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putListPolicy.parameter.inheritFromParent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#inherit_from_parent FolderOrganizationPolicy#inherit_from_parent}

---

###### `suggested_value`<sup>Optional</sup> <a name="suggested_value" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putListPolicy.parameter.suggestedValue"></a>

- *Type:* str

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#suggested_value FolderOrganizationPolicy#suggested_value}

---

##### `put_restore_policy` <a name="put_restore_policy" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putRestorePolicy"></a>

```python
def put_restore_policy(
  default: typing.Union[bool, IResolvable]
) -> None
```

###### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putRestorePolicy.parameter.default"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#default FolderOrganizationPolicy#default}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#create FolderOrganizationPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#delete FolderOrganizationPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#read FolderOrganizationPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#update FolderOrganizationPolicy#update}.

---

##### `reset_boolean_policy` <a name="reset_boolean_policy" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetBooleanPolicy"></a>

```python
def reset_boolean_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_list_policy` <a name="reset_list_policy" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetListPolicy"></a>

```python
def reset_list_policy() -> None
```

##### `reset_restore_policy` <a name="reset_restore_policy" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetRestorePolicy"></a>

```python
def reset_restore_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FolderOrganizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import folder_organization_policy

folderOrganizationPolicy.FolderOrganizationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import folder_organization_policy

folderOrganizationPolicy.FolderOrganizationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import folder_organization_policy

folderOrganizationPolicy.FolderOrganizationPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import folder_organization_policy

folderOrganizationPolicy.FolderOrganizationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FolderOrganizationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FolderOrganizationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FolderOrganizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FolderOrganizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.booleanPolicy">boolean_policy</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference">FolderOrganizationPolicyBooleanPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.listPolicy">list_policy</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference">FolderOrganizationPolicyListPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.restorePolicy">restore_policy</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference">FolderOrganizationPolicyRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference">FolderOrganizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.booleanPolicyInput">boolean_policy_input</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.constraintInput">constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.listPolicyInput">list_policy_input</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.restorePolicyInput">restore_policy_input</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.constraint">constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `boolean_policy`<sup>Required</sup> <a name="boolean_policy" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.booleanPolicy"></a>

```python
boolean_policy: FolderOrganizationPolicyBooleanPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference">FolderOrganizationPolicyBooleanPolicyOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `list_policy`<sup>Required</sup> <a name="list_policy" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.listPolicy"></a>

```python
list_policy: FolderOrganizationPolicyListPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference">FolderOrganizationPolicyListPolicyOutputReference</a>

---

##### `restore_policy`<sup>Required</sup> <a name="restore_policy" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.restorePolicy"></a>

```python
restore_policy: FolderOrganizationPolicyRestorePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference">FolderOrganizationPolicyRestorePolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.timeouts"></a>

```python
timeouts: FolderOrganizationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference">FolderOrganizationPolicyTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `boolean_policy_input`<sup>Optional</sup> <a name="boolean_policy_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.booleanPolicyInput"></a>

```python
boolean_policy_input: FolderOrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a>

---

##### `constraint_input`<sup>Optional</sup> <a name="constraint_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.constraintInput"></a>

```python
constraint_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `list_policy_input`<sup>Optional</sup> <a name="list_policy_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.listPolicyInput"></a>

```python
list_policy_input: FolderOrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a>

---

##### `restore_policy_input`<sup>Optional</sup> <a name="restore_policy_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.restorePolicyInput"></a>

```python
restore_policy_input: FolderOrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FolderOrganizationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FolderOrganizationPolicyBooleanPolicy <a name="FolderOrganizationPolicyBooleanPolicy" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import folder_organization_policy

folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy(
  enforced: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy.property.enforced">enforced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, then the Policy is enforced. If false, then any configuration is acceptable. |

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy.property.enforced"></a>

```python
enforced: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#enforced FolderOrganizationPolicy#enforced}

---

### FolderOrganizationPolicyConfig <a name="FolderOrganizationPolicyConfig" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import folder_organization_policy

folderOrganizationPolicy.FolderOrganizationPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  constraint: str,
  folder: str,
  boolean_policy: FolderOrganizationPolicyBooleanPolicy = None,
  id: str = None,
  list_policy: FolderOrganizationPolicyListPolicy = None,
  restore_policy: FolderOrganizationPolicyRestorePolicy = None,
  timeouts: FolderOrganizationPolicyTimeouts = None,
  version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.constraint">constraint</a></code> | <code>str</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.folder">folder</a></code> | <code>str</code> | The resource name of the folder to set the policy for. Its format is folders/{folder_id}. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.booleanPolicy">boolean_policy</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#id FolderOrganizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.listPolicy">list_policy</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.restorePolicy">restore_policy</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.version">version</a></code> | <code>typing.Union[int, float]</code> | Version of the Policy. Default version is 0. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#constraint FolderOrganizationPolicy#constraint}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

The resource name of the folder to set the policy for. Its format is folders/{folder_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#folder FolderOrganizationPolicy#folder}

---

##### `boolean_policy`<sup>Optional</sup> <a name="boolean_policy" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.booleanPolicy"></a>

```python
boolean_policy: FolderOrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#boolean_policy FolderOrganizationPolicy#boolean_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#id FolderOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `list_policy`<sup>Optional</sup> <a name="list_policy" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.listPolicy"></a>

```python
list_policy: FolderOrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#list_policy FolderOrganizationPolicy#list_policy}

---

##### `restore_policy`<sup>Optional</sup> <a name="restore_policy" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.restorePolicy"></a>

```python
restore_policy: FolderOrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#restore_policy FolderOrganizationPolicy#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.timeouts"></a>

```python
timeouts: FolderOrganizationPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#timeouts FolderOrganizationPolicy#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#version FolderOrganizationPolicy#version}

---

### FolderOrganizationPolicyListPolicy <a name="FolderOrganizationPolicyListPolicy" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import folder_organization_policy

folderOrganizationPolicy.FolderOrganizationPolicyListPolicy(
  allow: FolderOrganizationPolicyListPolicyAllow = None,
  deny: FolderOrganizationPolicyListPolicyDeny = None,
  inherit_from_parent: typing.Union[bool, IResolvable] = None,
  suggested_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow">FolderOrganizationPolicyListPolicyAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny">FolderOrganizationPolicyListPolicyDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.inheritFromParent">inherit_from_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.suggestedValue">suggested_value</a></code> | <code>str</code> | The Google Cloud Console will try to default to a configuration that matches the value specified in this field. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.allow"></a>

```python
allow: FolderOrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow">FolderOrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#allow FolderOrganizationPolicy#allow}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.deny"></a>

```python
deny: FolderOrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny">FolderOrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#deny FolderOrganizationPolicy#deny}

---

##### `inherit_from_parent`<sup>Optional</sup> <a name="inherit_from_parent" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.inheritFromParent"></a>

```python
inherit_from_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#inherit_from_parent FolderOrganizationPolicy#inherit_from_parent}

---

##### `suggested_value`<sup>Optional</sup> <a name="suggested_value" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.suggestedValue"></a>

```python
suggested_value: str
```

- *Type:* str

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#suggested_value FolderOrganizationPolicy#suggested_value}

---

### FolderOrganizationPolicyListPolicyAllow <a name="FolderOrganizationPolicyListPolicyAllow" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow.Initializer"></a>

```python
from cdktf_cdktf_provider_google import folder_organization_policy

folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow(
  all: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow.property.values">values</a></code> | <code>typing.List[str]</code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#all FolderOrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#values FolderOrganizationPolicy#values}

---

### FolderOrganizationPolicyListPolicyDeny <a name="FolderOrganizationPolicyListPolicyDeny" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny.Initializer"></a>

```python
from cdktf_cdktf_provider_google import folder_organization_policy

folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny(
  all: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny.property.values">values</a></code> | <code>typing.List[str]</code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#all FolderOrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#values FolderOrganizationPolicy#values}

---

### FolderOrganizationPolicyRestorePolicy <a name="FolderOrganizationPolicyRestorePolicy" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import folder_organization_policy

folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy(
  default: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | May only be set to true. If set, then the default Policy is restored. |

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#default FolderOrganizationPolicy#default}

---

### FolderOrganizationPolicyTimeouts <a name="FolderOrganizationPolicyTimeouts" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import folder_organization_policy

folderOrganizationPolicy.FolderOrganizationPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#create FolderOrganizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#delete FolderOrganizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#read FolderOrganizationPolicy#read}. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#update FolderOrganizationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#create FolderOrganizationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#delete FolderOrganizationPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#read FolderOrganizationPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#update FolderOrganizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FolderOrganizationPolicyBooleanPolicyOutputReference <a name="FolderOrganizationPolicyBooleanPolicyOutputReference" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import folder_organization_policy

folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput">enforced_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.enforced">enforced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enforced_input`<sup>Optional</sup> <a name="enforced_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput"></a>

```python
enforced_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.enforced"></a>

```python
enforced: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.internalValue"></a>

```python
internal_value: FolderOrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a>

---


### FolderOrganizationPolicyListPolicyAllowOutputReference <a name="FolderOrganizationPolicyListPolicyAllowOutputReference" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import folder_organization_policy

folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all` <a name="reset_all" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.allInput">all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow">FolderOrganizationPolicyListPolicyAllow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.allInput"></a>

```python
all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.internalValue"></a>

```python
internal_value: FolderOrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow">FolderOrganizationPolicyListPolicyAllow</a>

---


### FolderOrganizationPolicyListPolicyDenyOutputReference <a name="FolderOrganizationPolicyListPolicyDenyOutputReference" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import folder_organization_policy

folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all` <a name="reset_all" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.allInput">all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny">FolderOrganizationPolicyListPolicyDeny</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.allInput"></a>

```python
all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.internalValue"></a>

```python
internal_value: FolderOrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny">FolderOrganizationPolicyListPolicyDeny</a>

---


### FolderOrganizationPolicyListPolicyOutputReference <a name="FolderOrganizationPolicyListPolicyOutputReference" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import folder_organization_policy

folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.putAllow">put_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.putDeny">put_deny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetAllow">reset_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetDeny">reset_deny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetInheritFromParent">reset_inherit_from_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetSuggestedValue">reset_suggested_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allow` <a name="put_allow" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.putAllow"></a>

```python
def put_allow(
  all: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None
) -> None
```

###### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.putAllow.parameter.all"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#all FolderOrganizationPolicy#all}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.putAllow.parameter.values"></a>

- *Type:* typing.List[str]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#values FolderOrganizationPolicy#values}

---

##### `put_deny` <a name="put_deny" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.putDeny"></a>

```python
def put_deny(
  all: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None
) -> None
```

###### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.putDeny.parameter.all"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#all FolderOrganizationPolicy#all}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.putDeny.parameter.values"></a>

- *Type:* typing.List[str]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/folder_organization_policy#values FolderOrganizationPolicy#values}

---

##### `reset_allow` <a name="reset_allow" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetAllow"></a>

```python
def reset_allow() -> None
```

##### `reset_deny` <a name="reset_deny" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetDeny"></a>

```python
def reset_deny() -> None
```

##### `reset_inherit_from_parent` <a name="reset_inherit_from_parent" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetInheritFromParent"></a>

```python
def reset_inherit_from_parent() -> None
```

##### `reset_suggested_value` <a name="reset_suggested_value" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetSuggestedValue"></a>

```python
def reset_suggested_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference">FolderOrganizationPolicyListPolicyAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference">FolderOrganizationPolicyListPolicyDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.allowInput">allow_input</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow">FolderOrganizationPolicyListPolicyAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.denyInput">deny_input</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny">FolderOrganizationPolicyListPolicyDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput">inherit_from_parent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput">suggested_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParent">inherit_from_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.suggestedValue">suggested_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.allow"></a>

```python
allow: FolderOrganizationPolicyListPolicyAllowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference">FolderOrganizationPolicyListPolicyAllowOutputReference</a>

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.deny"></a>

```python
deny: FolderOrganizationPolicyListPolicyDenyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference">FolderOrganizationPolicyListPolicyDenyOutputReference</a>

---

##### `allow_input`<sup>Optional</sup> <a name="allow_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.allowInput"></a>

```python
allow_input: FolderOrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow">FolderOrganizationPolicyListPolicyAllow</a>

---

##### `deny_input`<sup>Optional</sup> <a name="deny_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.denyInput"></a>

```python
deny_input: FolderOrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny">FolderOrganizationPolicyListPolicyDeny</a>

---

##### `inherit_from_parent_input`<sup>Optional</sup> <a name="inherit_from_parent_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput"></a>

```python
inherit_from_parent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suggested_value_input`<sup>Optional</sup> <a name="suggested_value_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput"></a>

```python
suggested_value_input: str
```

- *Type:* str

---

##### `inherit_from_parent`<sup>Required</sup> <a name="inherit_from_parent" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParent"></a>

```python
inherit_from_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suggested_value`<sup>Required</sup> <a name="suggested_value" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.suggestedValue"></a>

```python
suggested_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.internalValue"></a>

```python
internal_value: FolderOrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a>

---


### FolderOrganizationPolicyRestorePolicyOutputReference <a name="FolderOrganizationPolicyRestorePolicyOutputReference" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import folder_organization_policy

folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.defaultInput">default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.defaultInput"></a>

```python
default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.internalValue"></a>

```python
internal_value: FolderOrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a>

---


### FolderOrganizationPolicyTimeoutsOutputReference <a name="FolderOrganizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import folder_organization_policy

folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FolderOrganizationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a>]

---



