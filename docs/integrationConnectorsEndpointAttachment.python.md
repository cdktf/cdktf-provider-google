# `integrationConnectorsEndpointAttachment` Submodule <a name="`integrationConnectorsEndpointAttachment` Submodule" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationConnectorsEndpointAttachment <a name="IntegrationConnectorsEndpointAttachment" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment google_integration_connectors_endpoint_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_google import integration_connectors_endpoint_attachment

integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment(
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
  name: str,
  service_attachment: str,
  description: str = None,
  endpoint_global_access: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: IntegrationConnectorsEndpointAttachmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.location">location</a></code> | <code>str</code> | Location in which Endpoint Attachment needs to be created. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of Endpoint Attachment needs to be created. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.serviceAttachment">service_attachment</a></code> | <code>str</code> | The path of the service attachment. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.endpointGlobalAccess">endpoint_global_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable global access for endpoint attachment. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#id IntegrationConnectorsEndpointAttachment#id}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#project IntegrationConnectorsEndpointAttachment#project}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.location"></a>

- *Type:* str

Location in which Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#location IntegrationConnectorsEndpointAttachment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.name"></a>

- *Type:* str

Name of Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#name IntegrationConnectorsEndpointAttachment#name}

---

##### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.serviceAttachment"></a>

- *Type:* str

The path of the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#service_attachment IntegrationConnectorsEndpointAttachment#service_attachment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.description"></a>

- *Type:* str

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#description IntegrationConnectorsEndpointAttachment#description}

---

##### `endpoint_global_access`<sup>Optional</sup> <a name="endpoint_global_access" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.endpointGlobalAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable global access for endpoint attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#endpoint_global_access IntegrationConnectorsEndpointAttachment#endpoint_global_access}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#id IntegrationConnectorsEndpointAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#labels IntegrationConnectorsEndpointAttachment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#project IntegrationConnectorsEndpointAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#timeouts IntegrationConnectorsEndpointAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetEndpointGlobalAccess">reset_endpoint_global_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#create IntegrationConnectorsEndpointAttachment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#delete IntegrationConnectorsEndpointAttachment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#update IntegrationConnectorsEndpointAttachment#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_endpoint_global_access` <a name="reset_endpoint_global_access" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetEndpointGlobalAccess"></a>

```python
def reset_endpoint_global_access() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationConnectorsEndpointAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import integration_connectors_endpoint_attachment

integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import integration_connectors_endpoint_attachment

integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import integration_connectors_endpoint_attachment

integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import integration_connectors_endpoint_attachment

integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationConnectorsEndpointAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationConnectorsEndpointAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationConnectorsEndpointAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationConnectorsEndpointAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.endpointIp">endpoint_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference">IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.endpointGlobalAccessInput">endpoint_global_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.serviceAttachmentInput">service_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.endpointGlobalAccess">endpoint_global_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.serviceAttachment">service_attachment</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `endpoint_ip`<sup>Required</sup> <a name="endpoint_ip" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.endpointIp"></a>

```python
endpoint_ip: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.timeouts"></a>

```python
timeouts: IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference">IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `endpoint_global_access_input`<sup>Optional</sup> <a name="endpoint_global_access_input" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.endpointGlobalAccessInput"></a>

```python
endpoint_global_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_attachment_input`<sup>Optional</sup> <a name="service_attachment_input" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.serviceAttachmentInput"></a>

```python
service_attachment_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IntegrationConnectorsEndpointAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint_global_access`<sup>Required</sup> <a name="endpoint_global_access" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.endpointGlobalAccess"></a>

```python
endpoint_global_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.serviceAttachment"></a>

```python
service_attachment: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationConnectorsEndpointAttachmentConfig <a name="IntegrationConnectorsEndpointAttachmentConfig" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import integration_connectors_endpoint_attachment

integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  service_attachment: str,
  description: str = None,
  endpoint_global_access: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: IntegrationConnectorsEndpointAttachmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.location">location</a></code> | <code>str</code> | Location in which Endpoint Attachment needs to be created. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.name">name</a></code> | <code>str</code> | Name of Endpoint Attachment needs to be created. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.serviceAttachment">service_attachment</a></code> | <code>str</code> | The path of the service attachment. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.description">description</a></code> | <code>str</code> | Description of the resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.endpointGlobalAccess">endpoint_global_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable global access for endpoint attachment. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#id IntegrationConnectorsEndpointAttachment#id}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#project IntegrationConnectorsEndpointAttachment#project}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location in which Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#location IntegrationConnectorsEndpointAttachment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#name IntegrationConnectorsEndpointAttachment#name}

---

##### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.serviceAttachment"></a>

```python
service_attachment: str
```

- *Type:* str

The path of the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#service_attachment IntegrationConnectorsEndpointAttachment#service_attachment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#description IntegrationConnectorsEndpointAttachment#description}

---

##### `endpoint_global_access`<sup>Optional</sup> <a name="endpoint_global_access" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.endpointGlobalAccess"></a>

```python
endpoint_global_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable global access for endpoint attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#endpoint_global_access IntegrationConnectorsEndpointAttachment#endpoint_global_access}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#id IntegrationConnectorsEndpointAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#labels IntegrationConnectorsEndpointAttachment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#project IntegrationConnectorsEndpointAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.timeouts"></a>

```python
timeouts: IntegrationConnectorsEndpointAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#timeouts IntegrationConnectorsEndpointAttachment#timeouts}

---

### IntegrationConnectorsEndpointAttachmentTimeouts <a name="IntegrationConnectorsEndpointAttachmentTimeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import integration_connectors_endpoint_attachment

integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#create IntegrationConnectorsEndpointAttachment#create}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#delete IntegrationConnectorsEndpointAttachment#delete}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#update IntegrationConnectorsEndpointAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#create IntegrationConnectorsEndpointAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#delete IntegrationConnectorsEndpointAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/integration_connectors_endpoint_attachment#update IntegrationConnectorsEndpointAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference <a name="IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import integration_connectors_endpoint_attachment

integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IntegrationConnectorsEndpointAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a>]

---



