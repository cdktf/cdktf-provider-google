# `data_google_game_services_game_server_deployment_rollout`

Refer to the Terraform Registory for docs: [`data_google_game_services_game_server_deployment_rollout`](https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/game_services_game_server_deployment_rollout).

# `dataGoogleGameServicesGameServerDeploymentRollout` Submodule <a name="`dataGoogleGameServicesGameServerDeploymentRollout` Submodule" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleGameServicesGameServerDeploymentRollout <a name="DataGoogleGameServicesGameServerDeploymentRollout" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/game_services_game_server_deployment_rollout google_game_services_game_server_deployment_rollout}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleGameServicesGameServerDeploymentRollout(Construct Scope, string Id, DataGoogleGameServicesGameServerDeploymentRolloutConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig">DataGoogleGameServicesGameServerDeploymentRolloutConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig">DataGoogleGameServicesGameServerDeploymentRolloutConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleGameServicesGameServerDeploymentRollout.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleGameServicesGameServerDeploymentRollout.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleGameServicesGameServerDeploymentRollout.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.defaultGameServerConfig">DefaultGameServerConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.gameServerConfigOverrides">GameServerConfigOverrides</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList">DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DefaultGameServerConfig`<sup>Required</sup> <a name="DefaultGameServerConfig" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.defaultGameServerConfig"></a>

```csharp
public string DefaultGameServerConfig { get; }
```

- *Type:* string

---

##### `GameServerConfigOverrides`<sup>Required</sup> <a name="GameServerConfigOverrides" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.gameServerConfigOverrides"></a>

```csharp
public DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList GameServerConfigOverrides { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList">DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.deploymentIdInput"></a>

```csharp
public string DeploymentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleGameServicesGameServerDeploymentRolloutConfig <a name="DataGoogleGameServicesGameServerDeploymentRolloutConfig" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleGameServicesGameServerDeploymentRolloutConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DeploymentId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.deploymentId">DeploymentId</a></code> | <code>string</code> | The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/game_services_game_server_deployment_rollout#id DataGoogleGameServicesGameServerDeploymentRollout#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.deploymentId"></a>

```csharp
public string DeploymentId { get; set; }
```

- *Type:* string

The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/game_services_game_server_deployment_rollout#deployment_id DataGoogleGameServicesGameServerDeploymentRollout#deployment_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/game_services_game_server_deployment_rollout#id DataGoogleGameServicesGameServerDeploymentRollout#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides <a name="DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides {

};
```


### DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector <a name="DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList <a name="DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get"></a>

```csharp
private DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference <a name="DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersion">ConfigVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelector">RealmsSelector</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList">DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigVersion`<sup>Required</sup> <a name="ConfigVersion" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersion"></a>

```csharp
public string ConfigVersion { get; }
```

- *Type:* string

---

##### `RealmsSelector`<sup>Required</sup> <a name="RealmsSelector" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelector"></a>

```csharp
public DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList RealmsSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList">DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>

---


### DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList <a name="DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.get"></a>

```csharp
private DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference <a name="DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realms">Realms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Realms`<sup>Required</sup> <a name="Realms" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realms"></a>

```csharp
public string[] Realms { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.internalValue"></a>

```csharp
public DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

---



