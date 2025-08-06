# `apihubPlugin` Submodule <a name="`apihubPlugin` Submodule" id="@cdktf/provider-google.apihubPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApihubPlugin <a name="ApihubPlugin" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin google_apihub_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPlugin(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  location: str,
  plugin_id: str,
  actions_config: typing.Union[IResolvable, typing.List[ApihubPluginActionsConfig]] = None,
  config_template: ApihubPluginConfigTemplate = None,
  description: str = None,
  documentation: ApihubPluginDocumentation = None,
  hosting_service: ApihubPluginHostingService = None,
  id: str = None,
  plugin_category: str = None,
  project: str = None,
  timeouts: ApihubPluginTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the plugin. Max length is 50 characters (Unicode code points). |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.pluginId">plugin_id</a></code> | <code>str</code> | The ID to use for the Plugin resource, which will become the final component of the Plugin's resource name. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.actionsConfig">actions_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig">ApihubPluginActionsConfig</a>]]</code> | actions_config block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.configTemplate">config_template</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a></code> | config_template block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.description">description</a></code> | <code>str</code> | The plugin description. Max length is 2000 characters (Unicode code points). |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.documentation">documentation</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a></code> | documentation block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.hostingService">hosting_service</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a></code> | hosting_service block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#id ApihubPlugin#id}. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.pluginCategory">plugin_category</a></code> | <code>str</code> | Possible values: PLUGIN_CATEGORY_UNSPECIFIED API_GATEWAY API_PRODUCER. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#project ApihubPlugin#project}. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts">ApihubPluginTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the plugin. Max length is 50 characters (Unicode code points).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#display_name ApihubPlugin#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#location ApihubPlugin#location}

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.pluginId"></a>

- *Type:* str

The ID to use for the Plugin resource, which will become the final component of the Plugin's resource name.

This field is optional.

* If provided, the same will be used. The service will throw an error if
  the specified id is already used by another Plugin resource in the API hub
  instance.
* If not provided, a system generated id will be used.

This value should be 4-63 characters, overall resource name which will be
of format
'projects/{project}/locations/{location}/plugins/{plugin}',
its length is limited to 1000 characters and valid characters are
/a-z[0-9]-_/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#plugin_id ApihubPlugin#plugin_id}

---

##### `actions_config`<sup>Optional</sup> <a name="actions_config" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.actionsConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig">ApihubPluginActionsConfig</a>]]

actions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#actions_config ApihubPlugin#actions_config}

---

##### `config_template`<sup>Optional</sup> <a name="config_template" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.configTemplate"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a>

config_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#config_template ApihubPlugin#config_template}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.description"></a>

- *Type:* str

The plugin description. Max length is 2000 characters (Unicode code points).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#description ApihubPlugin#description}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.documentation"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a>

documentation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#documentation ApihubPlugin#documentation}

---

##### `hosting_service`<sup>Optional</sup> <a name="hosting_service" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.hostingService"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a>

hosting_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#hosting_service ApihubPlugin#hosting_service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#id ApihubPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plugin_category`<sup>Optional</sup> <a name="plugin_category" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.pluginCategory"></a>

- *Type:* str

Possible values: PLUGIN_CATEGORY_UNSPECIFIED API_GATEWAY API_PRODUCER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#plugin_category ApihubPlugin#plugin_category}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#project ApihubPlugin#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts">ApihubPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#timeouts ApihubPlugin#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.putActionsConfig">put_actions_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.putConfigTemplate">put_config_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.putDocumentation">put_documentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.putHostingService">put_hosting_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetActionsConfig">reset_actions_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetConfigTemplate">reset_config_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetDocumentation">reset_documentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetHostingService">reset_hosting_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetPluginCategory">reset_plugin_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_actions_config` <a name="put_actions_config" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putActionsConfig"></a>

```python
def put_actions_config(
  value: typing.Union[IResolvable, typing.List[ApihubPluginActionsConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putActionsConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig">ApihubPluginActionsConfig</a>]]

---

##### `put_config_template` <a name="put_config_template" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putConfigTemplate"></a>

```python
def put_config_template(
  additional_config_template: typing.Union[IResolvable, typing.List[ApihubPluginConfigTemplateAdditionalConfigTemplate]] = None,
  auth_config_template: ApihubPluginConfigTemplateAuthConfigTemplate = None
) -> None
```

###### `additional_config_template`<sup>Optional</sup> <a name="additional_config_template" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putConfigTemplate.parameter.additionalConfigTemplate"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate">ApihubPluginConfigTemplateAdditionalConfigTemplate</a>]]

additional_config_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#additional_config_template ApihubPlugin#additional_config_template}

---

###### `auth_config_template`<sup>Optional</sup> <a name="auth_config_template" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putConfigTemplate.parameter.authConfigTemplate"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate">ApihubPluginConfigTemplateAuthConfigTemplate</a>

auth_config_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#auth_config_template ApihubPlugin#auth_config_template}

---

##### `put_documentation` <a name="put_documentation" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putDocumentation"></a>

```python
def put_documentation(
  external_uri: str = None
) -> None
```

###### `external_uri`<sup>Optional</sup> <a name="external_uri" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putDocumentation.parameter.externalUri"></a>

- *Type:* str

The uri of the externally hosted documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#external_uri ApihubPlugin#external_uri}

---

##### `put_hosting_service` <a name="put_hosting_service" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putHostingService"></a>

```python
def put_hosting_service(
  service_uri: str = None
) -> None
```

###### `service_uri`<sup>Optional</sup> <a name="service_uri" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putHostingService.parameter.serviceUri"></a>

- *Type:* str

The URI of the service implemented by the plugin developer, used to invoke the plugin's functionality.

This information is only required for
user defined plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#service_uri ApihubPlugin#service_uri}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#create ApihubPlugin#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#delete ApihubPlugin#delete}.

---

##### `reset_actions_config` <a name="reset_actions_config" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetActionsConfig"></a>

```python
def reset_actions_config() -> None
```

##### `reset_config_template` <a name="reset_config_template" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetConfigTemplate"></a>

```python
def reset_config_template() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_documentation` <a name="reset_documentation" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetDocumentation"></a>

```python
def reset_documentation() -> None
```

##### `reset_hosting_service` <a name="reset_hosting_service" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetHostingService"></a>

```python
def reset_hosting_service() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_plugin_category` <a name="reset_plugin_category" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetPluginCategory"></a>

```python
def reset_plugin_category() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApihubPlugin resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPlugin.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPlugin.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPlugin.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPlugin.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApihubPlugin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApihubPlugin to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApihubPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApihubPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.actionsConfig">actions_config</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList">ApihubPluginActionsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.configTemplate">config_template</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference">ApihubPluginConfigTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.documentation">documentation</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference">ApihubPluginDocumentationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.hostingService">hosting_service</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference">ApihubPluginHostingServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.ownershipType">ownership_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference">ApihubPluginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.actionsConfigInput">actions_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig">ApihubPluginActionsConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.configTemplateInput">config_template_input</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.documentationInput">documentation_input</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.hostingServiceInput">hosting_service_input</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginCategoryInput">plugin_category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginIdInput">plugin_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts">ApihubPluginTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginCategory">plugin_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginId">plugin_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `actions_config`<sup>Required</sup> <a name="actions_config" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.actionsConfig"></a>

```python
actions_config: ApihubPluginActionsConfigList
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList">ApihubPluginActionsConfigList</a>

---

##### `config_template`<sup>Required</sup> <a name="config_template" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.configTemplate"></a>

```python
config_template: ApihubPluginConfigTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference">ApihubPluginConfigTemplateOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `documentation`<sup>Required</sup> <a name="documentation" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.documentation"></a>

```python
documentation: ApihubPluginDocumentationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference">ApihubPluginDocumentationOutputReference</a>

---

##### `hosting_service`<sup>Required</sup> <a name="hosting_service" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.hostingService"></a>

```python
hosting_service: ApihubPluginHostingServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference">ApihubPluginHostingServiceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ownership_type`<sup>Required</sup> <a name="ownership_type" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.ownershipType"></a>

```python
ownership_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.timeouts"></a>

```python
timeouts: ApihubPluginTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference">ApihubPluginTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `actions_config_input`<sup>Optional</sup> <a name="actions_config_input" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.actionsConfigInput"></a>

```python
actions_config_input: typing.Union[IResolvable, typing.List[ApihubPluginActionsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig">ApihubPluginActionsConfig</a>]]

---

##### `config_template_input`<sup>Optional</sup> <a name="config_template_input" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.configTemplateInput"></a>

```python
config_template_input: ApihubPluginConfigTemplate
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `documentation_input`<sup>Optional</sup> <a name="documentation_input" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.documentationInput"></a>

```python
documentation_input: ApihubPluginDocumentation
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a>

---

##### `hosting_service_input`<sup>Optional</sup> <a name="hosting_service_input" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.hostingServiceInput"></a>

```python
hosting_service_input: ApihubPluginHostingService
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `plugin_category_input`<sup>Optional</sup> <a name="plugin_category_input" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginCategoryInput"></a>

```python
plugin_category_input: str
```

- *Type:* str

---

##### `plugin_id_input`<sup>Optional</sup> <a name="plugin_id_input" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginIdInput"></a>

```python
plugin_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApihubPluginTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts">ApihubPluginTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `plugin_category`<sup>Required</sup> <a name="plugin_category" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginCategory"></a>

```python
plugin_category: str
```

- *Type:* str

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginId"></a>

```python
plugin_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApihubPluginActionsConfig <a name="ApihubPluginActionsConfig" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginActionsConfig(
  description: str,
  display_name: str,
  id: str,
  trigger_mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.description">description</a></code> | <code>str</code> | The description of the operation performed by the action. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the action. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.id">id</a></code> | <code>str</code> | The id of the action. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.triggerMode">trigger_mode</a></code> | <code>str</code> | The trigger mode supported by the action. Possible values: TRIGGER_MODE_UNSPECIFIED API_HUB_ON_DEMAND_TRIGGER API_HUB_SCHEDULE_TRIGGER NON_API_HUB_MANAGED. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the operation performed by the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#description ApihubPlugin#description}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#display_name ApihubPlugin#display_name}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

The id of the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#id ApihubPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `trigger_mode`<sup>Required</sup> <a name="trigger_mode" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.triggerMode"></a>

```python
trigger_mode: str
```

- *Type:* str

The trigger mode supported by the action. Possible values: TRIGGER_MODE_UNSPECIFIED API_HUB_ON_DEMAND_TRIGGER API_HUB_SCHEDULE_TRIGGER NON_API_HUB_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#trigger_mode ApihubPlugin#trigger_mode}

---

### ApihubPluginConfig <a name="ApihubPluginConfig" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  location: str,
  plugin_id: str,
  actions_config: typing.Union[IResolvable, typing.List[ApihubPluginActionsConfig]] = None,
  config_template: ApihubPluginConfigTemplate = None,
  description: str = None,
  documentation: ApihubPluginDocumentation = None,
  hosting_service: ApihubPluginHostingService = None,
  id: str = None,
  plugin_category: str = None,
  project: str = None,
  timeouts: ApihubPluginTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the plugin. Max length is 50 characters (Unicode code points). |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.pluginId">plugin_id</a></code> | <code>str</code> | The ID to use for the Plugin resource, which will become the final component of the Plugin's resource name. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.actionsConfig">actions_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig">ApihubPluginActionsConfig</a>]]</code> | actions_config block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.configTemplate">config_template</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a></code> | config_template block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.description">description</a></code> | <code>str</code> | The plugin description. Max length is 2000 characters (Unicode code points). |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.documentation">documentation</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a></code> | documentation block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.hostingService">hosting_service</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a></code> | hosting_service block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#id ApihubPlugin#id}. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.pluginCategory">plugin_category</a></code> | <code>str</code> | Possible values: PLUGIN_CATEGORY_UNSPECIFIED API_GATEWAY API_PRODUCER. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#project ApihubPlugin#project}. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts">ApihubPluginTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the plugin. Max length is 50 characters (Unicode code points).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#display_name ApihubPlugin#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#location ApihubPlugin#location}

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.pluginId"></a>

```python
plugin_id: str
```

- *Type:* str

The ID to use for the Plugin resource, which will become the final component of the Plugin's resource name.

This field is optional.

* If provided, the same will be used. The service will throw an error if
  the specified id is already used by another Plugin resource in the API hub
  instance.
* If not provided, a system generated id will be used.

This value should be 4-63 characters, overall resource name which will be
of format
'projects/{project}/locations/{location}/plugins/{plugin}',
its length is limited to 1000 characters and valid characters are
/a-z[0-9]-_/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#plugin_id ApihubPlugin#plugin_id}

---

##### `actions_config`<sup>Optional</sup> <a name="actions_config" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.actionsConfig"></a>

```python
actions_config: typing.Union[IResolvable, typing.List[ApihubPluginActionsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig">ApihubPluginActionsConfig</a>]]

actions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#actions_config ApihubPlugin#actions_config}

---

##### `config_template`<sup>Optional</sup> <a name="config_template" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.configTemplate"></a>

```python
config_template: ApihubPluginConfigTemplate
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a>

config_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#config_template ApihubPlugin#config_template}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The plugin description. Max length is 2000 characters (Unicode code points).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#description ApihubPlugin#description}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.documentation"></a>

```python
documentation: ApihubPluginDocumentation
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a>

documentation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#documentation ApihubPlugin#documentation}

---

##### `hosting_service`<sup>Optional</sup> <a name="hosting_service" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.hostingService"></a>

```python
hosting_service: ApihubPluginHostingService
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a>

hosting_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#hosting_service ApihubPlugin#hosting_service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#id ApihubPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plugin_category`<sup>Optional</sup> <a name="plugin_category" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.pluginCategory"></a>

```python
plugin_category: str
```

- *Type:* str

Possible values: PLUGIN_CATEGORY_UNSPECIFIED API_GATEWAY API_PRODUCER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#plugin_category ApihubPlugin#plugin_category}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#project ApihubPlugin#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.timeouts"></a>

```python
timeouts: ApihubPluginTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts">ApihubPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#timeouts ApihubPlugin#timeouts}

---

### ApihubPluginConfigTemplate <a name="ApihubPluginConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginConfigTemplate(
  additional_config_template: typing.Union[IResolvable, typing.List[ApihubPluginConfigTemplateAdditionalConfigTemplate]] = None,
  auth_config_template: ApihubPluginConfigTemplateAuthConfigTemplate = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate.property.additionalConfigTemplate">additional_config_template</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate">ApihubPluginConfigTemplateAdditionalConfigTemplate</a>]]</code> | additional_config_template block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate.property.authConfigTemplate">auth_config_template</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate">ApihubPluginConfigTemplateAuthConfigTemplate</a></code> | auth_config_template block. |

---

##### `additional_config_template`<sup>Optional</sup> <a name="additional_config_template" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate.property.additionalConfigTemplate"></a>

```python
additional_config_template: typing.Union[IResolvable, typing.List[ApihubPluginConfigTemplateAdditionalConfigTemplate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate">ApihubPluginConfigTemplateAdditionalConfigTemplate</a>]]

additional_config_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#additional_config_template ApihubPlugin#additional_config_template}

---

##### `auth_config_template`<sup>Optional</sup> <a name="auth_config_template" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate.property.authConfigTemplate"></a>

```python
auth_config_template: ApihubPluginConfigTemplateAuthConfigTemplate
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate">ApihubPluginConfigTemplateAuthConfigTemplate</a>

auth_config_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#auth_config_template ApihubPlugin#auth_config_template}

---

### ApihubPluginConfigTemplateAdditionalConfigTemplate <a name="ApihubPluginConfigTemplateAdditionalConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate(
  id: str,
  value_type: str,
  description: str = None,
  enum_options: typing.Union[IResolvable, typing.List[ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions]] = None,
  multi_select_options: typing.Union[IResolvable, typing.List[ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions]] = None,
  required: typing.Union[bool, IResolvable] = None,
  validation_regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.id">id</a></code> | <code>str</code> | ID of the config variable. Must be unique within the configuration. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.valueType">value_type</a></code> | <code>str</code> | Type of the parameter: string, int, bool etc. Possible values: VALUE_TYPE_UNSPECIFIED STRING INT BOOL SECRET ENUM MULTI_SELECT MULTI_STRING MULTI_INT. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.description">description</a></code> | <code>str</code> | Description. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.enumOptions">enum_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>]]</code> | enum_options block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.multiSelectOptions">multi_select_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>]]</code> | multi_select_options block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag represents that this 'ConfigVariable' must be provided for a PluginInstance. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.validationRegex">validation_regex</a></code> | <code>str</code> | Regular expression in RE2 syntax used for validating the 'value' of a 'ConfigVariable'. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

ID of the config variable. Must be unique within the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#id ApihubPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

Type of the parameter: string, int, bool etc. Possible values: VALUE_TYPE_UNSPECIFIED STRING INT BOOL SECRET ENUM MULTI_SELECT MULTI_STRING MULTI_INT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#value_type ApihubPlugin#value_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

Description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#description ApihubPlugin#description}

---

##### `enum_options`<sup>Optional</sup> <a name="enum_options" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.enumOptions"></a>

```python
enum_options: typing.Union[IResolvable, typing.List[ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>]]

enum_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#enum_options ApihubPlugin#enum_options}

---

##### `multi_select_options`<sup>Optional</sup> <a name="multi_select_options" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.multiSelectOptions"></a>

```python
multi_select_options: typing.Union[IResolvable, typing.List[ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>]]

multi_select_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#multi_select_options ApihubPlugin#multi_select_options}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag represents that this 'ConfigVariable' must be provided for a PluginInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#required ApihubPlugin#required}

---

##### `validation_regex`<sup>Optional</sup> <a name="validation_regex" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.validationRegex"></a>

```python
validation_regex: str
```

- *Type:* str

Regular expression in RE2 syntax used for validating the 'value' of a 'ConfigVariable'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#validation_regex ApihubPlugin#validation_regex}

---

### ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions(
  display_name: str,
  id: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.displayName">display_name</a></code> | <code>str</code> | Display name of the option. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.id">id</a></code> | <code>str</code> | Id of the option. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.description">description</a></code> | <code>str</code> | Description of the option. |

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#display_name ApihubPlugin#display_name}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.id"></a>

```python
id: str
```

- *Type:* str

Id of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#id ApihubPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#description ApihubPlugin#description}

---

### ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions(
  display_name: str,
  id: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.displayName">display_name</a></code> | <code>str</code> | Display name of the option. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.id">id</a></code> | <code>str</code> | Id of the option. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.description">description</a></code> | <code>str</code> | Description of the option. |

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#display_name ApihubPlugin#display_name}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.id"></a>

```python
id: str
```

- *Type:* str

Id of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#id ApihubPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#description ApihubPlugin#description}

---

### ApihubPluginConfigTemplateAuthConfigTemplate <a name="ApihubPluginConfigTemplateAuthConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate(
  supported_auth_types: typing.List[str],
  service_account: ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate.property.supportedAuthTypes">supported_auth_types</a></code> | <code>typing.List[str]</code> | The list of authentication types supported by the plugin. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate.property.serviceAccount">service_account</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a></code> | service_account block. |

---

##### `supported_auth_types`<sup>Required</sup> <a name="supported_auth_types" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate.property.supportedAuthTypes"></a>

```python
supported_auth_types: typing.List[str]
```

- *Type:* typing.List[str]

The list of authentication types supported by the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#supported_auth_types ApihubPlugin#supported_auth_types}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate.property.serviceAccount"></a>

```python
service_account: ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#service_account ApihubPlugin#service_account}

---

### ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount <a name="ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount(
  service_account: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount.property.serviceAccount">service_account</a></code> | <code>str</code> | The service account to be used for authenticating request. |

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The service account to be used for authenticating request.

The 'iam.serviceAccounts.getAccessToken' permission should be granted on
this service account to the impersonator service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#service_account ApihubPlugin#service_account}

---

### ApihubPluginDocumentation <a name="ApihubPluginDocumentation" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginDocumentation(
  external_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation.property.externalUri">external_uri</a></code> | <code>str</code> | The uri of the externally hosted documentation. |

---

##### `external_uri`<sup>Optional</sup> <a name="external_uri" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation.property.externalUri"></a>

```python
external_uri: str
```

- *Type:* str

The uri of the externally hosted documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#external_uri ApihubPlugin#external_uri}

---

### ApihubPluginHostingService <a name="ApihubPluginHostingService" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginHostingService(
  service_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService.property.serviceUri">service_uri</a></code> | <code>str</code> | The URI of the service implemented by the plugin developer, used to invoke the plugin's functionality. |

---

##### `service_uri`<sup>Optional</sup> <a name="service_uri" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService.property.serviceUri"></a>

```python
service_uri: str
```

- *Type:* str

The URI of the service implemented by the plugin developer, used to invoke the plugin's functionality.

This information is only required for
user defined plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#service_uri ApihubPlugin#service_uri}

---

### ApihubPluginTimeouts <a name="ApihubPluginTimeouts" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#create ApihubPlugin#create}. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#delete ApihubPlugin#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#create ApihubPlugin#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#delete ApihubPlugin#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApihubPluginActionsConfigList <a name="ApihubPluginActionsConfigList" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginActionsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApihubPluginActionsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig">ApihubPluginActionsConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApihubPluginActionsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig">ApihubPluginActionsConfig</a>]]

---


### ApihubPluginActionsConfigOutputReference <a name="ApihubPluginActionsConfigOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginActionsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.triggerModeInput">trigger_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.triggerMode">trigger_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig">ApihubPluginActionsConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `trigger_mode_input`<sup>Optional</sup> <a name="trigger_mode_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.triggerModeInput"></a>

```python
trigger_mode_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `trigger_mode`<sup>Required</sup> <a name="trigger_mode" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.triggerMode"></a>

```python
trigger_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApihubPluginActionsConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig">ApihubPluginActionsConfig</a>]

---


### ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>]]

---


### ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>]

---


### ApihubPluginConfigTemplateAdditionalConfigTemplateList <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateList" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate">ApihubPluginConfigTemplateAdditionalConfigTemplate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApihubPluginConfigTemplateAdditionalConfigTemplate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate">ApihubPluginConfigTemplateAdditionalConfigTemplate</a>]]

---


### ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>]]

---


### ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>]

---


### ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putEnumOptions">put_enum_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putMultiSelectOptions">put_multi_select_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetEnumOptions">reset_enum_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetMultiSelectOptions">reset_multi_select_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetValidationRegex">reset_validation_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_enum_options` <a name="put_enum_options" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putEnumOptions"></a>

```python
def put_enum_options(
  value: typing.Union[IResolvable, typing.List[ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putEnumOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>]]

---

##### `put_multi_select_options` <a name="put_multi_select_options" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putMultiSelectOptions"></a>

```python
def put_multi_select_options(
  value: typing.Union[IResolvable, typing.List[ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putMultiSelectOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enum_options` <a name="reset_enum_options" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetEnumOptions"></a>

```python
def reset_enum_options() -> None
```

##### `reset_multi_select_options` <a name="reset_multi_select_options" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetMultiSelectOptions"></a>

```python
def reset_multi_select_options() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_validation_regex` <a name="reset_validation_regex" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetValidationRegex"></a>

```python
def reset_validation_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.enumOptions">enum_options</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.multiSelectOptions">multi_select_options</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.enumOptionsInput">enum_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.multiSelectOptionsInput">multi_select_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.validationRegexInput">validation_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.validationRegex">validation_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate">ApihubPluginConfigTemplateAdditionalConfigTemplate</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enum_options`<sup>Required</sup> <a name="enum_options" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.enumOptions"></a>

```python
enum_options: ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList</a>

---

##### `multi_select_options`<sup>Required</sup> <a name="multi_select_options" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.multiSelectOptions"></a>

```python
multi_select_options: ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enum_options_input`<sup>Optional</sup> <a name="enum_options_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.enumOptionsInput"></a>

```python
enum_options_input: typing.Union[IResolvable, typing.List[ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `multi_select_options_input`<sup>Optional</sup> <a name="multi_select_options_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.multiSelectOptionsInput"></a>

```python
multi_select_options_input: typing.Union[IResolvable, typing.List[ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>]]

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `validation_regex_input`<sup>Optional</sup> <a name="validation_regex_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.validationRegexInput"></a>

```python
validation_regex_input: str
```

- *Type:* str

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `validation_regex`<sup>Required</sup> <a name="validation_regex" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.validationRegex"></a>

```python
validation_regex: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApihubPluginConfigTemplateAdditionalConfigTemplate]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate">ApihubPluginConfigTemplateAdditionalConfigTemplate</a>]

---


### ApihubPluginConfigTemplateAuthConfigTemplateOutputReference <a name="ApihubPluginConfigTemplateAuthConfigTemplateOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.putServiceAccount">put_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_service_account` <a name="put_service_account" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.putServiceAccount"></a>

```python
def put_service_account(
  service_account: str
) -> None
```

###### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.putServiceAccount.parameter.serviceAccount"></a>

- *Type:* str

The service account to be used for authenticating request.

The 'iam.serviceAccounts.getAccessToken' permission should be granted on
this service account to the impersonator service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#service_account ApihubPlugin#service_account}

---

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.serviceAccount">service_account</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.supportedAuthTypesInput">supported_auth_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.supportedAuthTypes">supported_auth_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate">ApihubPluginConfigTemplateAuthConfigTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.serviceAccount"></a>

```python
service_account: ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference</a>

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a>

---

##### `supported_auth_types_input`<sup>Optional</sup> <a name="supported_auth_types_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.supportedAuthTypesInput"></a>

```python
supported_auth_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_auth_types`<sup>Required</sup> <a name="supported_auth_types" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.supportedAuthTypes"></a>

```python
supported_auth_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.internalValue"></a>

```python
internal_value: ApihubPluginConfigTemplateAuthConfigTemplate
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate">ApihubPluginConfigTemplateAuthConfigTemplate</a>

---


### ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference <a name="ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.internalValue"></a>

```python
internal_value: ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a>

---


### ApihubPluginConfigTemplateOutputReference <a name="ApihubPluginConfigTemplateOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginConfigTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.putAdditionalConfigTemplate">put_additional_config_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.putAuthConfigTemplate">put_auth_config_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.resetAdditionalConfigTemplate">reset_additional_config_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.resetAuthConfigTemplate">reset_auth_config_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_additional_config_template` <a name="put_additional_config_template" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.putAdditionalConfigTemplate"></a>

```python
def put_additional_config_template(
  value: typing.Union[IResolvable, typing.List[ApihubPluginConfigTemplateAdditionalConfigTemplate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.putAdditionalConfigTemplate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate">ApihubPluginConfigTemplateAdditionalConfigTemplate</a>]]

---

##### `put_auth_config_template` <a name="put_auth_config_template" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.putAuthConfigTemplate"></a>

```python
def put_auth_config_template(
  supported_auth_types: typing.List[str],
  service_account: ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount = None
) -> None
```

###### `supported_auth_types`<sup>Required</sup> <a name="supported_auth_types" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.putAuthConfigTemplate.parameter.supportedAuthTypes"></a>

- *Type:* typing.List[str]

The list of authentication types supported by the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#supported_auth_types ApihubPlugin#supported_auth_types}

---

###### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.putAuthConfigTemplate.parameter.serviceAccount"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apihub_plugin#service_account ApihubPlugin#service_account}

---

##### `reset_additional_config_template` <a name="reset_additional_config_template" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.resetAdditionalConfigTemplate"></a>

```python
def reset_additional_config_template() -> None
```

##### `reset_auth_config_template` <a name="reset_auth_config_template" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.resetAuthConfigTemplate"></a>

```python
def reset_auth_config_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.additionalConfigTemplate">additional_config_template</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList">ApihubPluginConfigTemplateAdditionalConfigTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.authConfigTemplate">auth_config_template</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference">ApihubPluginConfigTemplateAuthConfigTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.additionalConfigTemplateInput">additional_config_template_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate">ApihubPluginConfigTemplateAdditionalConfigTemplate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.authConfigTemplateInput">auth_config_template_input</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate">ApihubPluginConfigTemplateAuthConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_config_template`<sup>Required</sup> <a name="additional_config_template" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.additionalConfigTemplate"></a>

```python
additional_config_template: ApihubPluginConfigTemplateAdditionalConfigTemplateList
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList">ApihubPluginConfigTemplateAdditionalConfigTemplateList</a>

---

##### `auth_config_template`<sup>Required</sup> <a name="auth_config_template" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.authConfigTemplate"></a>

```python
auth_config_template: ApihubPluginConfigTemplateAuthConfigTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference">ApihubPluginConfigTemplateAuthConfigTemplateOutputReference</a>

---

##### `additional_config_template_input`<sup>Optional</sup> <a name="additional_config_template_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.additionalConfigTemplateInput"></a>

```python
additional_config_template_input: typing.Union[IResolvable, typing.List[ApihubPluginConfigTemplateAdditionalConfigTemplate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate">ApihubPluginConfigTemplateAdditionalConfigTemplate</a>]]

---

##### `auth_config_template_input`<sup>Optional</sup> <a name="auth_config_template_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.authConfigTemplateInput"></a>

```python
auth_config_template_input: ApihubPluginConfigTemplateAuthConfigTemplate
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate">ApihubPluginConfigTemplateAuthConfigTemplate</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.internalValue"></a>

```python
internal_value: ApihubPluginConfigTemplate
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a>

---


### ApihubPluginDocumentationOutputReference <a name="ApihubPluginDocumentationOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginDocumentationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.resetExternalUri">reset_external_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_external_uri` <a name="reset_external_uri" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.resetExternalUri"></a>

```python
def reset_external_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.externalUriInput">external_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.externalUri">external_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_uri_input`<sup>Optional</sup> <a name="external_uri_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.externalUriInput"></a>

```python
external_uri_input: str
```

- *Type:* str

---

##### `external_uri`<sup>Required</sup> <a name="external_uri" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.externalUri"></a>

```python
external_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.internalValue"></a>

```python
internal_value: ApihubPluginDocumentation
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a>

---


### ApihubPluginHostingServiceOutputReference <a name="ApihubPluginHostingServiceOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginHostingServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.resetServiceUri">reset_service_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_uri` <a name="reset_service_uri" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.resetServiceUri"></a>

```python
def reset_service_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.serviceUriInput">service_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.serviceUri">service_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_uri_input`<sup>Optional</sup> <a name="service_uri_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.serviceUriInput"></a>

```python
service_uri_input: str
```

- *Type:* str

---

##### `service_uri`<sup>Required</sup> <a name="service_uri" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.serviceUri"></a>

```python
service_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.internalValue"></a>

```python
internal_value: ApihubPluginHostingService
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a>

---


### ApihubPluginTimeoutsOutputReference <a name="ApihubPluginTimeoutsOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_plugin

apihubPlugin.ApihubPluginTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts">ApihubPluginTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApihubPluginTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts">ApihubPluginTimeouts</a>]

---



