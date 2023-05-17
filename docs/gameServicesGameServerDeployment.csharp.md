# `google_game_services_game_server_deployment`

Refer to the Terraform Registory for docs: [`google_game_services_game_server_deployment`](https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment).

# `gameServicesGameServerDeployment` Submodule <a name="`gameServicesGameServerDeployment` Submodule" id="@cdktf/provider-google.gameServicesGameServerDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameServicesGameServerDeployment <a name="GameServicesGameServerDeployment" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment google_game_services_game_server_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GameServicesGameServerDeployment(Construct Scope, string Id, GameServicesGameServerDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig">GameServicesGameServerDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig">GameServicesGameServerDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.putTimeouts"></a>

```csharp
private void PutTimeouts(GameServicesGameServerDeploymentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeouts">GameServicesGameServerDeploymentTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GameServicesGameServerDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GameServicesGameServerDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GameServicesGameServerDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference">GameServicesGameServerDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.timeouts"></a>

```csharp
public GameServicesGameServerDeploymentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference">GameServicesGameServerDeploymentTimeoutsOutputReference</a>

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.deploymentIdInput"></a>

```csharp
public string DeploymentIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GameServicesGameServerDeploymentConfig <a name="GameServicesGameServerDeploymentConfig" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GameServicesGameServerDeploymentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DeploymentId,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Project = null,
    GameServicesGameServerDeploymentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.deploymentId">DeploymentId</a></code> | <code>string</code> | A unique id for the deployment. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.description">Description</a></code> | <code>string</code> | Human readable description of the game server deployment. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment#id GameServicesGameServerDeployment#id}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels associated with this game server deployment. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.location">Location</a></code> | <code>string</code> | Location of the Deployment. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment#project GameServicesGameServerDeployment#project}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeouts">GameServicesGameServerDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.deploymentId"></a>

```csharp
public string DeploymentId { get; set; }
```

- *Type:* string

A unique id for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment#deployment_id GameServicesGameServerDeployment#deployment_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human readable description of the game server deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment#description GameServicesGameServerDeployment#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment#id GameServicesGameServerDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels associated with this game server deployment. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment#labels GameServicesGameServerDeployment#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location of the Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment#location GameServicesGameServerDeployment#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment#project GameServicesGameServerDeployment#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentConfig.property.timeouts"></a>

```csharp
public GameServicesGameServerDeploymentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeouts">GameServicesGameServerDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment#timeouts GameServicesGameServerDeployment#timeouts}

---

### GameServicesGameServerDeploymentTimeouts <a name="GameServicesGameServerDeploymentTimeouts" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GameServicesGameServerDeploymentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment#create GameServicesGameServerDeployment#create}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment#delete GameServicesGameServerDeployment#delete}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment#update GameServicesGameServerDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment#create GameServicesGameServerDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment#delete GameServicesGameServerDeployment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/game_services_game_server_deployment#update GameServicesGameServerDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameServicesGameServerDeploymentTimeoutsOutputReference <a name="GameServicesGameServerDeploymentTimeoutsOutputReference" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GameServicesGameServerDeploymentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gameServicesGameServerDeployment.GameServicesGameServerDeploymentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



