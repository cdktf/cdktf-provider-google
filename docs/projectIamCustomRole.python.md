# `google_project_iam_custom_role`

Refer to the Terraform Registory for docs: [`google_project_iam_custom_role`](https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/project_iam_custom_role).

# `projectIamCustomRole` Submodule <a name="`projectIamCustomRole` Submodule" id="@cdktf/provider-google.projectIamCustomRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIamCustomRole <a name="ProjectIamCustomRole" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/project_iam_custom_role google_project_iam_custom_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer"></a>

```python
from cdktf_cdktf_provider_google import project_iam_custom_role

projectIamCustomRole.ProjectIamCustomRole(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  permissions: typing.List[str],
  role_id: str,
  title: str,
  description: str = None,
  id: str = None,
  project: str = None,
  stage: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.permissions">permissions</a></code> | <code>typing.List[str]</code> | The names of the permissions this role grants when bound in an IAM policy. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.roleId">role_id</a></code> | <code>str</code> | The camel case role id to use for this role. Cannot contain - characters. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.title">title</a></code> | <code>str</code> | A human-readable title for the role. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description for the role. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/project_iam_custom_role#id ProjectIamCustomRole#id}. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.project">project</a></code> | <code>str</code> | The project that the service account will be created in. Defaults to the provider project configuration. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.stage">stage</a></code> | <code>str</code> | The current launch stage of the role. Defaults to GA. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.permissions"></a>

- *Type:* typing.List[str]

The names of the permissions this role grants when bound in an IAM policy.

At least one permission must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/project_iam_custom_role#permissions ProjectIamCustomRole#permissions}

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.roleId"></a>

- *Type:* str

The camel case role id to use for this role. Cannot contain - characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/project_iam_custom_role#role_id ProjectIamCustomRole#role_id}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.title"></a>

- *Type:* str

A human-readable title for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/project_iam_custom_role#title ProjectIamCustomRole#title}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/project_iam_custom_role#description ProjectIamCustomRole#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/project_iam_custom_role#id ProjectIamCustomRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.project"></a>

- *Type:* str

The project that the service account will be created in. Defaults to the provider project configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/project_iam_custom_role#project ProjectIamCustomRole#project}

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.Initializer.parameter.stage"></a>

- *Type:* str

The current launch stage of the role. Defaults to GA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/project_iam_custom_role#stage ProjectIamCustomRole#stage}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.resetStage">reset_stage</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_stage` <a name="reset_stage" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.resetStage"></a>

```python
def reset_stage() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import project_iam_custom_role

projectIamCustomRole.ProjectIamCustomRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import project_iam_custom_role

projectIamCustomRole.ProjectIamCustomRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import project_iam_custom_role

projectIamCustomRole.ProjectIamCustomRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.deleted">deleted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.permissionsInput">permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.roleIdInput">role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.stageInput">stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.title">title</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.deleted"></a>

```python
deleted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.permissionsInput"></a>

```python
permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_id_input`<sup>Optional</sup> <a name="role_id_input" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.roleIdInput"></a>

```python
role_id_input: str
```

- *Type:* str

---

##### `stage_input`<sup>Optional</sup> <a name="stage_input" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.stageInput"></a>

```python
stage_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.title"></a>

```python
title: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIamCustomRoleConfig <a name="ProjectIamCustomRoleConfig" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import project_iam_custom_role

projectIamCustomRole.ProjectIamCustomRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  permissions: typing.List[str],
  role_id: str,
  title: str,
  description: str = None,
  id: str = None,
  project: str = None,
  stage: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | The names of the permissions this role grants when bound in an IAM policy. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.roleId">role_id</a></code> | <code>str</code> | The camel case role id to use for this role. Cannot contain - characters. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.title">title</a></code> | <code>str</code> | A human-readable title for the role. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.description">description</a></code> | <code>str</code> | A human-readable description for the role. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/project_iam_custom_role#id ProjectIamCustomRole#id}. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.project">project</a></code> | <code>str</code> | The project that the service account will be created in. Defaults to the provider project configuration. |
| <code><a href="#@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.stage">stage</a></code> | <code>str</code> | The current launch stage of the role. Defaults to GA. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

The names of the permissions this role grants when bound in an IAM policy.

At least one permission must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/project_iam_custom_role#permissions ProjectIamCustomRole#permissions}

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

The camel case role id to use for this role. Cannot contain - characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/project_iam_custom_role#role_id ProjectIamCustomRole#role_id}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.title"></a>

```python
title: str
```

- *Type:* str

A human-readable title for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/project_iam_custom_role#title ProjectIamCustomRole#title}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/project_iam_custom_role#description ProjectIamCustomRole#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/project_iam_custom_role#id ProjectIamCustomRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project that the service account will be created in. Defaults to the provider project configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/project_iam_custom_role#project ProjectIamCustomRole#project}

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-google.projectIamCustomRole.ProjectIamCustomRoleConfig.property.stage"></a>

```python
stage: str
```

- *Type:* str

The current launch stage of the role. Defaults to GA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/project_iam_custom_role#stage ProjectIamCustomRole#stage}

---



