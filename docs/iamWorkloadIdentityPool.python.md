# `iamWorkloadIdentityPool` Submodule <a name="`iamWorkloadIdentityPool` Submodule" id="@cdktf/provider-google.iamWorkloadIdentityPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkloadIdentityPool <a name="IamWorkloadIdentityPool" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool google_iam_workload_identity_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool

iamWorkloadIdentityPool.IamWorkloadIdentityPool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workload_identity_pool_id: str,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: IamWorkloadIdentityPoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.workloadIdentityPoolId">workload_identity_pool_id</a></code> | <code>str</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the pool. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the pool is disabled. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A display name for the pool. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#id IamWorkloadIdentityPool#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#project IamWorkloadIdentityPool#project}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workload_identity_pool_id`<sup>Required</sup> <a name="workload_identity_pool_id" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.workloadIdentityPoolId"></a>

- *Type:* str

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#workload_identity_pool_id IamWorkloadIdentityPool#workload_identity_pool_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.description"></a>

- *Type:* str

A description of the pool. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#description IamWorkloadIdentityPool#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the pool is disabled.

You cannot use a disabled pool to exchange tokens, or use
existing tokens to access resources. If the pool is re-enabled, existing tokens grant
access again.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#disabled IamWorkloadIdentityPool#disabled}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.displayName"></a>

- *Type:* str

A display name for the pool. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#display_name IamWorkloadIdentityPool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#id IamWorkloadIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#project IamWorkloadIdentityPool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#timeouts IamWorkloadIdentityPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#create IamWorkloadIdentityPool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#delete IamWorkloadIdentityPool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#update IamWorkloadIdentityPool#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool

iamWorkloadIdentityPool.IamWorkloadIdentityPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool

iamWorkloadIdentityPool.IamWorkloadIdentityPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool

iamWorkloadIdentityPool.IamWorkloadIdentityPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference">IamWorkloadIdentityPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.workloadIdentityPoolIdInput">workload_identity_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.workloadIdentityPoolId">workload_identity_pool_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.timeouts"></a>

```python
timeouts: IamWorkloadIdentityPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference">IamWorkloadIdentityPoolTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IamWorkloadIdentityPoolTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a>, cdktf.IResolvable]

---

##### `workload_identity_pool_id_input`<sup>Optional</sup> <a name="workload_identity_pool_id_input" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.workloadIdentityPoolIdInput"></a>

```python
workload_identity_pool_id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `workload_identity_pool_id`<sup>Required</sup> <a name="workload_identity_pool_id" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.workloadIdentityPoolId"></a>

```python
workload_identity_pool_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkloadIdentityPoolConfig <a name="IamWorkloadIdentityPoolConfig" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool

iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workload_identity_pool_id: str,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: IamWorkloadIdentityPoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.workloadIdentityPoolId">workload_identity_pool_id</a></code> | <code>str</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.description">description</a></code> | <code>str</code> | A description of the pool. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the pool is disabled. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.displayName">display_name</a></code> | <code>str</code> | A display name for the pool. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#id IamWorkloadIdentityPool#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#project IamWorkloadIdentityPool#project}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workload_identity_pool_id`<sup>Required</sup> <a name="workload_identity_pool_id" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.workloadIdentityPoolId"></a>

```python
workload_identity_pool_id: str
```

- *Type:* str

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#workload_identity_pool_id IamWorkloadIdentityPool#workload_identity_pool_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the pool. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#description IamWorkloadIdentityPool#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the pool is disabled.

You cannot use a disabled pool to exchange tokens, or use
existing tokens to access resources. If the pool is re-enabled, existing tokens grant
access again.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#disabled IamWorkloadIdentityPool#disabled}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A display name for the pool. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#display_name IamWorkloadIdentityPool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#id IamWorkloadIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#project IamWorkloadIdentityPool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.timeouts"></a>

```python
timeouts: IamWorkloadIdentityPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#timeouts IamWorkloadIdentityPool#timeouts}

---

### IamWorkloadIdentityPoolTimeouts <a name="IamWorkloadIdentityPoolTimeouts" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool

iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#create IamWorkloadIdentityPool#create}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#delete IamWorkloadIdentityPool#delete}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#update IamWorkloadIdentityPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#create IamWorkloadIdentityPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#delete IamWorkloadIdentityPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool#update IamWorkloadIdentityPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkloadIdentityPoolTimeoutsOutputReference <a name="IamWorkloadIdentityPoolTimeoutsOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_workload_identity_pool

iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IamWorkloadIdentityPoolTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a>, cdktf.IResolvable]

---



