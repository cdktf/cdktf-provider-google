# `google_container_analysis_note_iam_policy`

Refer to the Terraform Registory for docs: [`google_container_analysis_note_iam_policy`](https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/container_analysis_note_iam_policy).

# `containerAnalysisNoteIamPolicy` Submodule <a name="`containerAnalysisNoteIamPolicy` Submodule" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAnalysisNoteIamPolicy <a name="ContainerAnalysisNoteIamPolicy" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/container_analysis_note_iam_policy google_container_analysis_note_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_note_iam_policy

containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  note: str,
  policy_data: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.note">note</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/container_analysis_note_iam_policy#note ContainerAnalysisNoteIamPolicy#note}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/container_analysis_note_iam_policy#policy_data ContainerAnalysisNoteIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/container_analysis_note_iam_policy#id ContainerAnalysisNoteIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/container_analysis_note_iam_policy#project ContainerAnalysisNoteIamPolicy#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `note`<sup>Required</sup> <a name="note" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.note"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/container_analysis_note_iam_policy#note ContainerAnalysisNoteIamPolicy#note}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.policyData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/container_analysis_note_iam_policy#policy_data ContainerAnalysisNoteIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/container_analysis_note_iam_policy#id ContainerAnalysisNoteIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/container_analysis_note_iam_policy#project ContainerAnalysisNoteIamPolicy#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_note_iam_policy

containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_note_iam_policy

containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_note_iam_policy

containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.noteInput">note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.policyDataInput">policy_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.note">note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `note_input`<sup>Optional</sup> <a name="note_input" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.noteInput"></a>

```python
note_input: str
```

- *Type:* str

---

##### `policy_data_input`<sup>Optional</sup> <a name="policy_data_input" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.policyDataInput"></a>

```python
policy_data_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `note`<sup>Required</sup> <a name="note" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.note"></a>

```python
note: str
```

- *Type:* str

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAnalysisNoteIamPolicyConfig <a name="ContainerAnalysisNoteIamPolicyConfig" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_note_iam_policy

containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  note: str,
  policy_data: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.note">note</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/container_analysis_note_iam_policy#note ContainerAnalysisNoteIamPolicy#note}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/container_analysis_note_iam_policy#policy_data ContainerAnalysisNoteIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/container_analysis_note_iam_policy#id ContainerAnalysisNoteIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/container_analysis_note_iam_policy#project ContainerAnalysisNoteIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `note`<sup>Required</sup> <a name="note" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.note"></a>

```python
note: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/container_analysis_note_iam_policy#note ContainerAnalysisNoteIamPolicy#note}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/container_analysis_note_iam_policy#policy_data ContainerAnalysisNoteIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/container_analysis_note_iam_policy#id ContainerAnalysisNoteIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAnalysisNoteIamPolicy.ContainerAnalysisNoteIamPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/container_analysis_note_iam_policy#project ContainerAnalysisNoteIamPolicy#project}.

---



