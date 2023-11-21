# `google_project_default_service_accounts`

Refer to the Terraform Registory for docs: [`google_project_default_service_accounts`](https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts).

# `projectDefaultServiceAccounts` Submodule <a name="`projectDefaultServiceAccounts` Submodule" id="@cdktf/provider-google.projectDefaultServiceAccounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectDefaultServiceAccounts <a name="ProjectDefaultServiceAccounts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts google_project_default_service_accounts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import project_default_service_accounts

projectDefaultServiceAccounts.ProjectDefaultServiceAccounts(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  project: str,
  id: str = None,
  restore_policy: str = None,
  timeouts: ProjectDefaultServiceAccountsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.action">action</a></code> | <code>str</code> | The action to be performed in the default service accounts. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.project">project</a></code> | <code>str</code> | The project ID where service accounts are created. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#id ProjectDefaultServiceAccounts#id}. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.restorePolicy">restore_policy</a></code> | <code>str</code> | The action to be performed in the default service accounts on the resource destroy. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts">ProjectDefaultServiceAccountsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.action"></a>

- *Type:* str

The action to be performed in the default service accounts.

Valid values are: DEPRIVILEGE, DELETE, DISABLE.
Note that DEPRIVILEGE action will ignore the REVERT configuration in the restore_policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#action ProjectDefaultServiceAccounts#action}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.project"></a>

- *Type:* str

The project ID where service accounts are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#project ProjectDefaultServiceAccounts#project}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#id ProjectDefaultServiceAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `restore_policy`<sup>Optional</sup> <a name="restore_policy" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.restorePolicy"></a>

- *Type:* str

The action to be performed in the default service accounts on the resource destroy.

Valid values are NONE, REVERT and REVERT_AND_IGNORE_FAILURE. It is applied for any action but in the DEPRIVILEGE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#restore_policy ProjectDefaultServiceAccounts#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts">ProjectDefaultServiceAccountsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#timeouts ProjectDefaultServiceAccounts#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetRestorePolicy">reset_restore_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#create ProjectDefaultServiceAccounts#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#delete ProjectDefaultServiceAccounts#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#read ProjectDefaultServiceAccounts#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_restore_policy` <a name="reset_restore_policy" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetRestorePolicy"></a>

```python
def reset_restore_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProjectDefaultServiceAccounts resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import project_default_service_accounts

projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import project_default_service_accounts

projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import project_default_service_accounts

projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import project_default_service_accounts

projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProjectDefaultServiceAccounts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProjectDefaultServiceAccounts to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProjectDefaultServiceAccounts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectDefaultServiceAccounts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.serviceAccounts">service_accounts</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference">ProjectDefaultServiceAccountsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.restorePolicyInput">restore_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts">ProjectDefaultServiceAccountsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.restorePolicy">restore_policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_accounts`<sup>Required</sup> <a name="service_accounts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.serviceAccounts"></a>

```python
service_accounts: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.timeouts"></a>

```python
timeouts: ProjectDefaultServiceAccountsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference">ProjectDefaultServiceAccountsTimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `restore_policy_input`<sup>Optional</sup> <a name="restore_policy_input" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.restorePolicyInput"></a>

```python
restore_policy_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ProjectDefaultServiceAccountsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts">ProjectDefaultServiceAccountsTimeouts</a>]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `restore_policy`<sup>Required</sup> <a name="restore_policy" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.restorePolicy"></a>

```python
restore_policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectDefaultServiceAccountsConfig <a name="ProjectDefaultServiceAccountsConfig" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import project_default_service_accounts

projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  project: str,
  id: str = None,
  restore_policy: str = None,
  timeouts: ProjectDefaultServiceAccountsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.action">action</a></code> | <code>str</code> | The action to be performed in the default service accounts. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.project">project</a></code> | <code>str</code> | The project ID where service accounts are created. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#id ProjectDefaultServiceAccounts#id}. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.restorePolicy">restore_policy</a></code> | <code>str</code> | The action to be performed in the default service accounts on the resource destroy. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts">ProjectDefaultServiceAccountsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.action"></a>

```python
action: str
```

- *Type:* str

The action to be performed in the default service accounts.

Valid values are: DEPRIVILEGE, DELETE, DISABLE.
Note that DEPRIVILEGE action will ignore the REVERT configuration in the restore_policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#action ProjectDefaultServiceAccounts#action}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project ID where service accounts are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#project ProjectDefaultServiceAccounts#project}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#id ProjectDefaultServiceAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `restore_policy`<sup>Optional</sup> <a name="restore_policy" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.restorePolicy"></a>

```python
restore_policy: str
```

- *Type:* str

The action to be performed in the default service accounts on the resource destroy.

Valid values are NONE, REVERT and REVERT_AND_IGNORE_FAILURE. It is applied for any action but in the DEPRIVILEGE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#restore_policy ProjectDefaultServiceAccounts#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.timeouts"></a>

```python
timeouts: ProjectDefaultServiceAccountsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts">ProjectDefaultServiceAccountsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#timeouts ProjectDefaultServiceAccounts#timeouts}

---

### ProjectDefaultServiceAccountsTimeouts <a name="ProjectDefaultServiceAccountsTimeouts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import project_default_service_accounts

projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#create ProjectDefaultServiceAccounts#create}. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#delete ProjectDefaultServiceAccounts#delete}. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#read ProjectDefaultServiceAccounts#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#create ProjectDefaultServiceAccounts#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#delete ProjectDefaultServiceAccounts#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/project_default_service_accounts#read ProjectDefaultServiceAccounts#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectDefaultServiceAccountsTimeoutsOutputReference <a name="ProjectDefaultServiceAccountsTimeoutsOutputReference" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import project_default_service_accounts

projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts">ProjectDefaultServiceAccountsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProjectDefaultServiceAccountsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts">ProjectDefaultServiceAccountsTimeouts</a>]

---



