# `integrationConnectorsManagedZone` Submodule <a name="`integrationConnectorsManagedZone` Submodule" id="@cdktf/provider-google.integrationConnectorsManagedZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationConnectorsManagedZone <a name="IntegrationConnectorsManagedZone" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone google_integration_connectors_managed_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer"></a>

```python
from cdktf_cdktf_provider_google import integration_connectors_managed_zone

integrationConnectorsManagedZone.IntegrationConnectorsManagedZone(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns: str,
  name: str,
  target_project: str,
  target_vpc: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: IntegrationConnectorsManagedZoneTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.dns">dns</a></code> | <code>str</code> | DNS Name of the resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of Managed Zone needs to be created. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.targetProject">target_project</a></code> | <code>str</code> | The name of the Target Project. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.targetVpc">target_vpc</a></code> | <code>str</code> | The name of the Target Project VPC Network. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#id IntegrationConnectorsManagedZone#id}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#project IntegrationConnectorsManagedZone#project}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts">IntegrationConnectorsManagedZoneTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.dns"></a>

- *Type:* str

DNS Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#dns IntegrationConnectorsManagedZone#dns}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.name"></a>

- *Type:* str

Name of Managed Zone needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#name IntegrationConnectorsManagedZone#name}

---

##### `target_project`<sup>Required</sup> <a name="target_project" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.targetProject"></a>

- *Type:* str

The name of the Target Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#target_project IntegrationConnectorsManagedZone#target_project}

---

##### `target_vpc`<sup>Required</sup> <a name="target_vpc" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.targetVpc"></a>

- *Type:* str

The name of the Target Project VPC Network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#target_vpc IntegrationConnectorsManagedZone#target_vpc}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.description"></a>

- *Type:* str

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#description IntegrationConnectorsManagedZone#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#id IntegrationConnectorsManagedZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#labels IntegrationConnectorsManagedZone#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#project IntegrationConnectorsManagedZone#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts">IntegrationConnectorsManagedZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#timeouts IntegrationConnectorsManagedZone#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#create IntegrationConnectorsManagedZone#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#delete IntegrationConnectorsManagedZone#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#update IntegrationConnectorsManagedZone#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationConnectorsManagedZone resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import integration_connectors_managed_zone

integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import integration_connectors_managed_zone

integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import integration_connectors_managed_zone

integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import integration_connectors_managed_zone

integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationConnectorsManagedZone resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationConnectorsManagedZone to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationConnectorsManagedZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationConnectorsManagedZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference">IntegrationConnectorsManagedZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.dnsInput">dns_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetProjectInput">target_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetVpcInput">target_vpc_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts">IntegrationConnectorsManagedZoneTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.dns">dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetProject">target_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetVpc">target_vpc</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.timeouts"></a>

```python
timeouts: IntegrationConnectorsManagedZoneTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference">IntegrationConnectorsManagedZoneTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dns_input`<sup>Optional</sup> <a name="dns_input" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.dnsInput"></a>

```python
dns_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `target_project_input`<sup>Optional</sup> <a name="target_project_input" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetProjectInput"></a>

```python
target_project_input: str
```

- *Type:* str

---

##### `target_vpc_input`<sup>Optional</sup> <a name="target_vpc_input" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetVpcInput"></a>

```python
target_vpc_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IntegrationConnectorsManagedZoneTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts">IntegrationConnectorsManagedZoneTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.dns"></a>

```python
dns: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `target_project`<sup>Required</sup> <a name="target_project" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetProject"></a>

```python
target_project: str
```

- *Type:* str

---

##### `target_vpc`<sup>Required</sup> <a name="target_vpc" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetVpc"></a>

```python
target_vpc: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationConnectorsManagedZoneConfig <a name="IntegrationConnectorsManagedZoneConfig" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import integration_connectors_managed_zone

integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns: str,
  name: str,
  target_project: str,
  target_vpc: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: IntegrationConnectorsManagedZoneTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.dns">dns</a></code> | <code>str</code> | DNS Name of the resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.name">name</a></code> | <code>str</code> | Name of Managed Zone needs to be created. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.targetProject">target_project</a></code> | <code>str</code> | The name of the Target Project. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.targetVpc">target_vpc</a></code> | <code>str</code> | The name of the Target Project VPC Network. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.description">description</a></code> | <code>str</code> | Description of the resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#id IntegrationConnectorsManagedZone#id}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#project IntegrationConnectorsManagedZone#project}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts">IntegrationConnectorsManagedZoneTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.dns"></a>

```python
dns: str
```

- *Type:* str

DNS Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#dns IntegrationConnectorsManagedZone#dns}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of Managed Zone needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#name IntegrationConnectorsManagedZone#name}

---

##### `target_project`<sup>Required</sup> <a name="target_project" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.targetProject"></a>

```python
target_project: str
```

- *Type:* str

The name of the Target Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#target_project IntegrationConnectorsManagedZone#target_project}

---

##### `target_vpc`<sup>Required</sup> <a name="target_vpc" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.targetVpc"></a>

```python
target_vpc: str
```

- *Type:* str

The name of the Target Project VPC Network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#target_vpc IntegrationConnectorsManagedZone#target_vpc}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#description IntegrationConnectorsManagedZone#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#id IntegrationConnectorsManagedZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#labels IntegrationConnectorsManagedZone#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#project IntegrationConnectorsManagedZone#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.timeouts"></a>

```python
timeouts: IntegrationConnectorsManagedZoneTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts">IntegrationConnectorsManagedZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#timeouts IntegrationConnectorsManagedZone#timeouts}

---

### IntegrationConnectorsManagedZoneTimeouts <a name="IntegrationConnectorsManagedZoneTimeouts" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import integration_connectors_managed_zone

integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#create IntegrationConnectorsManagedZone#create}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#delete IntegrationConnectorsManagedZone#delete}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#update IntegrationConnectorsManagedZone#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#create IntegrationConnectorsManagedZone#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#delete IntegrationConnectorsManagedZone#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_managed_zone#update IntegrationConnectorsManagedZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationConnectorsManagedZoneTimeoutsOutputReference <a name="IntegrationConnectorsManagedZoneTimeoutsOutputReference" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import integration_connectors_managed_zone

integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts">IntegrationConnectorsManagedZoneTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IntegrationConnectorsManagedZoneTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts">IntegrationConnectorsManagedZoneTimeouts</a>]

---



