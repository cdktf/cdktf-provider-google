# `google_gke_hub_membership_binding`

Refer to the Terraform Registory for docs: [`google_gke_hub_membership_binding`](https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding).

# `gkeHubMembershipBinding` Submodule <a name="`gkeHubMembershipBinding` Submodule" id="@cdktf/provider-google.gkeHubMembershipBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeHubMembershipBinding <a name="GkeHubMembershipBinding" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding google_gke_hub_membership_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_membership_binding

gkeHubMembershipBinding.GkeHubMembershipBinding(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  membership_binding_id: str,
  membership_id: str,
  scope: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GkeHubMembershipBindingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.location">location</a></code> | <code>str</code> | Location of the membership. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.membershipBindingId">membership_binding_id</a></code> | <code>str</code> | The client-provided identifier of the membership binding. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.membershipId">membership_id</a></code> | <code>str</code> | Id of the membership. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.scope">scope</a></code> | <code>str</code> | A Workspace resource name in the format 'projects/* /locations/* /scopes/*'. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#id GkeHubMembershipBinding#id}. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for this Membership binding. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#project GkeHubMembershipBinding#project}. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeouts">GkeHubMembershipBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.location"></a>

- *Type:* str

Location of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#location GkeHubMembershipBinding#location}

---

##### `membership_binding_id`<sup>Required</sup> <a name="membership_binding_id" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.membershipBindingId"></a>

- *Type:* str

The client-provided identifier of the membership binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#membership_binding_id GkeHubMembershipBinding#membership_binding_id}

---

##### `membership_id`<sup>Required</sup> <a name="membership_id" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.membershipId"></a>

- *Type:* str

Id of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#membership_id GkeHubMembershipBinding#membership_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.scope"></a>

- *Type:* str

A Workspace resource name in the format 'projects/* /locations/* /scopes/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#scope GkeHubMembershipBinding#scope}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#id GkeHubMembershipBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels for this Membership binding.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#labels GkeHubMembershipBinding#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#project GkeHubMembershipBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeouts">GkeHubMembershipBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#timeouts GkeHubMembershipBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#create GkeHubMembershipBinding#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#delete GkeHubMembershipBinding#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#update GkeHubMembershipBinding#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_membership_binding

gkeHubMembershipBinding.GkeHubMembershipBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_membership_binding

gkeHubMembershipBinding.GkeHubMembershipBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_membership_binding

gkeHubMembershipBinding.GkeHubMembershipBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.state">state</a></code> | <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList">GkeHubMembershipBindingStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference">GkeHubMembershipBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.membershipBindingIdInput">membership_binding_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.membershipIdInput">membership_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeouts">GkeHubMembershipBindingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.membershipBindingId">membership_binding_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.membershipId">membership_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.state"></a>

```python
state: GkeHubMembershipBindingStateList
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList">GkeHubMembershipBindingStateList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.timeouts"></a>

```python
timeouts: GkeHubMembershipBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference">GkeHubMembershipBindingTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `membership_binding_id_input`<sup>Optional</sup> <a name="membership_binding_id_input" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.membershipBindingIdInput"></a>

```python
membership_binding_id_input: str
```

- *Type:* str

---

##### `membership_id_input`<sup>Optional</sup> <a name="membership_id_input" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.membershipIdInput"></a>

```python
membership_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GkeHubMembershipBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeouts">GkeHubMembershipBindingTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `membership_binding_id`<sup>Required</sup> <a name="membership_binding_id" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.membershipBindingId"></a>

```python
membership_binding_id: str
```

- *Type:* str

---

##### `membership_id`<sup>Required</sup> <a name="membership_id" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.membershipId"></a>

```python
membership_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GkeHubMembershipBindingConfig <a name="GkeHubMembershipBindingConfig" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_membership_binding

gkeHubMembershipBinding.GkeHubMembershipBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  membership_binding_id: str,
  membership_id: str,
  scope: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GkeHubMembershipBindingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.location">location</a></code> | <code>str</code> | Location of the membership. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.membershipBindingId">membership_binding_id</a></code> | <code>str</code> | The client-provided identifier of the membership binding. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.membershipId">membership_id</a></code> | <code>str</code> | Id of the membership. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.scope">scope</a></code> | <code>str</code> | A Workspace resource name in the format 'projects/* /locations/* /scopes/*'. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#id GkeHubMembershipBinding#id}. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for this Membership binding. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#project GkeHubMembershipBinding#project}. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeouts">GkeHubMembershipBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#location GkeHubMembershipBinding#location}

---

##### `membership_binding_id`<sup>Required</sup> <a name="membership_binding_id" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.membershipBindingId"></a>

```python
membership_binding_id: str
```

- *Type:* str

The client-provided identifier of the membership binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#membership_binding_id GkeHubMembershipBinding#membership_binding_id}

---

##### `membership_id`<sup>Required</sup> <a name="membership_id" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.membershipId"></a>

```python
membership_id: str
```

- *Type:* str

Id of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#membership_id GkeHubMembershipBinding#membership_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

A Workspace resource name in the format 'projects/* /locations/* /scopes/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#scope GkeHubMembershipBinding#scope}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#id GkeHubMembershipBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels for this Membership binding.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#labels GkeHubMembershipBinding#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#project GkeHubMembershipBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingConfig.property.timeouts"></a>

```python
timeouts: GkeHubMembershipBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeouts">GkeHubMembershipBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#timeouts GkeHubMembershipBinding#timeouts}

---

### GkeHubMembershipBindingState <a name="GkeHubMembershipBindingState" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingState.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_membership_binding

gkeHubMembershipBinding.GkeHubMembershipBindingState()
```


### GkeHubMembershipBindingTimeouts <a name="GkeHubMembershipBindingTimeouts" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_membership_binding

gkeHubMembershipBinding.GkeHubMembershipBindingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#create GkeHubMembershipBinding#create}. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#delete GkeHubMembershipBinding#delete}. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#update GkeHubMembershipBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#create GkeHubMembershipBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#delete GkeHubMembershipBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/gke_hub_membership_binding#update GkeHubMembershipBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeHubMembershipBindingStateList <a name="GkeHubMembershipBindingStateList" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_membership_binding

gkeHubMembershipBinding.GkeHubMembershipBindingStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeHubMembershipBindingStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GkeHubMembershipBindingStateOutputReference <a name="GkeHubMembershipBindingStateOutputReference" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_membership_binding

gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingState">GkeHubMembershipBindingState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingStateOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubMembershipBindingState
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingState">GkeHubMembershipBindingState</a>

---


### GkeHubMembershipBindingTimeoutsOutputReference <a name="GkeHubMembershipBindingTimeoutsOutputReference" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_membership_binding

gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeouts">GkeHubMembershipBindingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeHubMembershipBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubMembershipBinding.GkeHubMembershipBindingTimeouts">GkeHubMembershipBindingTimeouts</a>]

---



