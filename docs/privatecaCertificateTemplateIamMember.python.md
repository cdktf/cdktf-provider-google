# `privatecaCertificateTemplateIamMember` Submodule <a name="`privatecaCertificateTemplateIamMember` Submodule" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatecaCertificateTemplateIamMember <a name="PrivatecaCertificateTemplateIamMember" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member google_privateca_certificate_template_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer"></a>

```python
from cdktf_cdktf_provider_google import privateca_certificate_template_iam_member

privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_template: str,
  member: str,
  role: str,
  condition: PrivatecaCertificateTemplateIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.certificateTemplate">certificate_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#certificate_template PrivatecaCertificateTemplateIamMember#certificate_template}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#member PrivatecaCertificateTemplateIamMember#member}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#role PrivatecaCertificateTemplateIamMember#role}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#id PrivatecaCertificateTemplateIamMember#id}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#location PrivatecaCertificateTemplateIamMember#location}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#project PrivatecaCertificateTemplateIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_template`<sup>Required</sup> <a name="certificate_template" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.certificateTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#certificate_template PrivatecaCertificateTemplateIamMember#certificate_template}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#member PrivatecaCertificateTemplateIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#role PrivatecaCertificateTemplateIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#condition PrivatecaCertificateTemplateIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#id PrivatecaCertificateTemplateIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#location PrivatecaCertificateTemplateIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#project PrivatecaCertificateTemplateIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#expression PrivatecaCertificateTemplateIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#title PrivatecaCertificateTemplateIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#description PrivatecaCertificateTemplateIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PrivatecaCertificateTemplateIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import privateca_certificate_template_iam_member

privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import privateca_certificate_template_iam_member

privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import privateca_certificate_template_iam_member

privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import privateca_certificate_template_iam_member

privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PrivatecaCertificateTemplateIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PrivatecaCertificateTemplateIamMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PrivatecaCertificateTemplateIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivatecaCertificateTemplateIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference">PrivatecaCertificateTemplateIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.certificateTemplateInput">certificate_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.certificateTemplate">certificate_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.condition"></a>

```python
condition: PrivatecaCertificateTemplateIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference">PrivatecaCertificateTemplateIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `certificate_template_input`<sup>Optional</sup> <a name="certificate_template_input" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.certificateTemplateInput"></a>

```python
certificate_template_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.conditionInput"></a>

```python
condition_input: PrivatecaCertificateTemplateIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `certificate_template`<sup>Required</sup> <a name="certificate_template" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.certificateTemplate"></a>

```python
certificate_template: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatecaCertificateTemplateIamMemberCondition <a name="PrivatecaCertificateTemplateIamMemberCondition" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import privateca_certificate_template_iam_member

privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#expression PrivatecaCertificateTemplateIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#title PrivatecaCertificateTemplateIamMember#title}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#description PrivatecaCertificateTemplateIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#expression PrivatecaCertificateTemplateIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#title PrivatecaCertificateTemplateIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#description PrivatecaCertificateTemplateIamMember#description}.

---

### PrivatecaCertificateTemplateIamMemberConfig <a name="PrivatecaCertificateTemplateIamMemberConfig" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import privateca_certificate_template_iam_member

privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_template: str,
  member: str,
  role: str,
  condition: PrivatecaCertificateTemplateIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.certificateTemplate">certificate_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#certificate_template PrivatecaCertificateTemplateIamMember#certificate_template}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#member PrivatecaCertificateTemplateIamMember#member}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#role PrivatecaCertificateTemplateIamMember#role}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#id PrivatecaCertificateTemplateIamMember#id}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#location PrivatecaCertificateTemplateIamMember#location}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#project PrivatecaCertificateTemplateIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_template`<sup>Required</sup> <a name="certificate_template" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.certificateTemplate"></a>

```python
certificate_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#certificate_template PrivatecaCertificateTemplateIamMember#certificate_template}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#member PrivatecaCertificateTemplateIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#role PrivatecaCertificateTemplateIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.condition"></a>

```python
condition: PrivatecaCertificateTemplateIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#condition PrivatecaCertificateTemplateIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#id PrivatecaCertificateTemplateIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#location PrivatecaCertificateTemplateIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/privateca_certificate_template_iam_member#project PrivatecaCertificateTemplateIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivatecaCertificateTemplateIamMemberConditionOutputReference <a name="PrivatecaCertificateTemplateIamMemberConditionOutputReference" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import privateca_certificate_template_iam_member

privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: PrivatecaCertificateTemplateIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a>

---



