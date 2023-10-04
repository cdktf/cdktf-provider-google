# `google_network_services_edge_cache_origin`

Refer to the Terraform Registory for docs: [`google_network_services_edge_cache_origin`](https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin).

# `networkServicesEdgeCacheOrigin` Submodule <a name="`networkServicesEdgeCacheOrigin` Submodule" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesEdgeCacheOrigin <a name="NetworkServicesEdgeCacheOrigin" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin google_network_services_edge_cache_origin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesEdgeCacheOrigin(Construct Scope, string Id, NetworkServicesEdgeCacheOriginConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig">NetworkServicesEdgeCacheOriginConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig">NetworkServicesEdgeCacheOriginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putAwsV4Authentication">PutAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putOriginOverrideAction">PutOriginOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putOriginRedirect">PutOriginRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putTimeout">PutTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetAwsV4Authentication">ResetAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetFailoverOrigin">ResetFailoverOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetMaxAttempts">ResetMaxAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetOriginOverrideAction">ResetOriginOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetOriginRedirect">ResetOriginRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetRetryConditions">ResetRetryConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAwsV4Authentication` <a name="PutAwsV4Authentication" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putAwsV4Authentication"></a>

```csharp
private void PutAwsV4Authentication(NetworkServicesEdgeCacheOriginAwsV4Authentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putAwsV4Authentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication">NetworkServicesEdgeCacheOriginAwsV4Authentication</a>

---

##### `PutOriginOverrideAction` <a name="PutOriginOverrideAction" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putOriginOverrideAction"></a>

```csharp
private void PutOriginOverrideAction(NetworkServicesEdgeCacheOriginOriginOverrideAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putOriginOverrideAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction">NetworkServicesEdgeCacheOriginOriginOverrideAction</a>

---

##### `PutOriginRedirect` <a name="PutOriginRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putOriginRedirect"></a>

```csharp
private void PutOriginRedirect(NetworkServicesEdgeCacheOriginOriginRedirect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putOriginRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect">NetworkServicesEdgeCacheOriginOriginRedirect</a>

---

##### `PutTimeout` <a name="PutTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putTimeout"></a>

```csharp
private void PutTimeout(NetworkServicesEdgeCacheOriginTimeout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout">NetworkServicesEdgeCacheOriginTimeout</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkServicesEdgeCacheOriginTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts">NetworkServicesEdgeCacheOriginTimeouts</a>

---

##### `ResetAwsV4Authentication` <a name="ResetAwsV4Authentication" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetAwsV4Authentication"></a>

```csharp
private void ResetAwsV4Authentication()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFailoverOrigin` <a name="ResetFailoverOrigin" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetFailoverOrigin"></a>

```csharp
private void ResetFailoverOrigin()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMaxAttempts` <a name="ResetMaxAttempts" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetMaxAttempts"></a>

```csharp
private void ResetMaxAttempts()
```

##### `ResetOriginOverrideAction` <a name="ResetOriginOverrideAction" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetOriginOverrideAction"></a>

```csharp
private void ResetOriginOverrideAction()
```

##### `ResetOriginRedirect` <a name="ResetOriginRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetOriginRedirect"></a>

```csharp
private void ResetOriginRedirect()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetRetryConditions` <a name="ResetRetryConditions" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetRetryConditions"></a>

```csharp
private void ResetRetryConditions()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkServicesEdgeCacheOrigin.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkServicesEdgeCacheOrigin.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkServicesEdgeCacheOrigin.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.awsV4Authentication">AwsV4Authentication</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference">NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originOverrideAction">OriginOverrideAction</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference">NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originRedirect">OriginRedirect</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference">NetworkServicesEdgeCacheOriginOriginRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.timeout">Timeout</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference">NetworkServicesEdgeCacheOriginTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference">NetworkServicesEdgeCacheOriginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.awsV4AuthenticationInput">AwsV4AuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication">NetworkServicesEdgeCacheOriginAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.failoverOriginInput">FailoverOriginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.maxAttemptsInput">MaxAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originAddressInput">OriginAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originOverrideActionInput">OriginOverrideActionInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction">NetworkServicesEdgeCacheOriginOriginOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originRedirectInput">OriginRedirectInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect">NetworkServicesEdgeCacheOriginOriginRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.retryConditionsInput">RetryConditionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.timeoutInput">TimeoutInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout">NetworkServicesEdgeCacheOriginTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.failoverOrigin">FailoverOrigin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.maxAttempts">MaxAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originAddress">OriginAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.retryConditions">RetryConditions</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AwsV4Authentication`<sup>Required</sup> <a name="AwsV4Authentication" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.awsV4Authentication"></a>

```csharp
public NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference AwsV4Authentication { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference">NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `OriginOverrideAction`<sup>Required</sup> <a name="OriginOverrideAction" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originOverrideAction"></a>

```csharp
public NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference OriginOverrideAction { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference">NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference</a>

---

##### `OriginRedirect`<sup>Required</sup> <a name="OriginRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originRedirect"></a>

```csharp
public NetworkServicesEdgeCacheOriginOriginRedirectOutputReference OriginRedirect { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference">NetworkServicesEdgeCacheOriginOriginRedirectOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.timeout"></a>

```csharp
public NetworkServicesEdgeCacheOriginTimeoutOutputReference Timeout { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference">NetworkServicesEdgeCacheOriginTimeoutOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.timeouts"></a>

```csharp
public NetworkServicesEdgeCacheOriginTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference">NetworkServicesEdgeCacheOriginTimeoutsOutputReference</a>

---

##### `AwsV4AuthenticationInput`<sup>Optional</sup> <a name="AwsV4AuthenticationInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.awsV4AuthenticationInput"></a>

```csharp
public NetworkServicesEdgeCacheOriginAwsV4Authentication AwsV4AuthenticationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication">NetworkServicesEdgeCacheOriginAwsV4Authentication</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FailoverOriginInput`<sup>Optional</sup> <a name="FailoverOriginInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.failoverOriginInput"></a>

```csharp
public string FailoverOriginInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxAttemptsInput`<sup>Optional</sup> <a name="MaxAttemptsInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.maxAttemptsInput"></a>

```csharp
public double MaxAttemptsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OriginAddressInput`<sup>Optional</sup> <a name="OriginAddressInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originAddressInput"></a>

```csharp
public string OriginAddressInput { get; }
```

- *Type:* string

---

##### `OriginOverrideActionInput`<sup>Optional</sup> <a name="OriginOverrideActionInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originOverrideActionInput"></a>

```csharp
public NetworkServicesEdgeCacheOriginOriginOverrideAction OriginOverrideActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction">NetworkServicesEdgeCacheOriginOriginOverrideAction</a>

---

##### `OriginRedirectInput`<sup>Optional</sup> <a name="OriginRedirectInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originRedirectInput"></a>

```csharp
public NetworkServicesEdgeCacheOriginOriginRedirect OriginRedirectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect">NetworkServicesEdgeCacheOriginOriginRedirect</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RetryConditionsInput`<sup>Optional</sup> <a name="RetryConditionsInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.retryConditionsInput"></a>

```csharp
public string[] RetryConditionsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.timeoutInput"></a>

```csharp
public NetworkServicesEdgeCacheOriginTimeout TimeoutInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout">NetworkServicesEdgeCacheOriginTimeout</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FailoverOrigin`<sup>Required</sup> <a name="FailoverOrigin" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.failoverOrigin"></a>

```csharp
public string FailoverOrigin { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxAttempts`<sup>Required</sup> <a name="MaxAttempts" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.maxAttempts"></a>

```csharp
public double MaxAttempts { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OriginAddress`<sup>Required</sup> <a name="OriginAddress" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originAddress"></a>

```csharp
public string OriginAddress { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RetryConditions`<sup>Required</sup> <a name="RetryConditions" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.retryConditions"></a>

```csharp
public string[] RetryConditions { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesEdgeCacheOriginAwsV4Authentication <a name="NetworkServicesEdgeCacheOriginAwsV4Authentication" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesEdgeCacheOriginAwsV4Authentication {
    string AccessKeyId,
    string OriginRegion,
    string SecretAccessKeyVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | The access key ID your origin uses to identify the key. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication.property.originRegion">OriginRegion</a></code> | <code>string</code> | The name of the AWS region that your origin is in. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication.property.secretAccessKeyVersion">SecretAccessKeyVersion</a></code> | <code>string</code> | The Secret Manager secret version of the secret access key used by your origin. |

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; set; }
```

- *Type:* string

The access key ID your origin uses to identify the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#access_key_id NetworkServicesEdgeCacheOrigin#access_key_id}

---

##### `OriginRegion`<sup>Required</sup> <a name="OriginRegion" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication.property.originRegion"></a>

```csharp
public string OriginRegion { get; set; }
```

- *Type:* string

The name of the AWS region that your origin is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#origin_region NetworkServicesEdgeCacheOrigin#origin_region}

---

##### `SecretAccessKeyVersion`<sup>Required</sup> <a name="SecretAccessKeyVersion" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication.property.secretAccessKeyVersion"></a>

```csharp
public string SecretAccessKeyVersion { get; set; }
```

- *Type:* string

The Secret Manager secret version of the secret access key used by your origin.

This is the resource name of the secret version in the format 'projects/* /secrets/* /versions/*' where the '*' values are replaced by the project, secret, and version you require.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#secret_access_key_version NetworkServicesEdgeCacheOrigin#secret_access_key_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### NetworkServicesEdgeCacheOriginConfig <a name="NetworkServicesEdgeCacheOriginConfig" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesEdgeCacheOriginConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string OriginAddress,
    NetworkServicesEdgeCacheOriginAwsV4Authentication AwsV4Authentication = null,
    string Description = null,
    string FailoverOrigin = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    double MaxAttempts = null,
    NetworkServicesEdgeCacheOriginOriginOverrideAction OriginOverrideAction = null,
    NetworkServicesEdgeCacheOriginOriginRedirect OriginRedirect = null,
    double Port = null,
    string Project = null,
    string Protocol = null,
    string[] RetryConditions = null,
    NetworkServicesEdgeCacheOriginTimeout Timeout = null,
    NetworkServicesEdgeCacheOriginTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.originAddress">OriginAddress</a></code> | <code>string</code> | A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud Storage bucket. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.awsV4Authentication">AwsV4Authentication</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication">NetworkServicesEdgeCacheOriginAwsV4Authentication</a></code> | aws_v4_authentication block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.description">Description</a></code> | <code>string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.failoverOrigin">FailoverOrigin</a></code> | <code>string</code> | The Origin resource to try when the current origin cannot be reached. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#id NetworkServicesEdgeCacheOrigin#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the EdgeCache resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.maxAttempts">MaxAttempts</a></code> | <code>double</code> | The maximum number of attempts to cache fill from this origin. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.originOverrideAction">OriginOverrideAction</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction">NetworkServicesEdgeCacheOriginOriginOverrideAction</a></code> | origin_override_action block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.originRedirect">OriginRedirect</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect">NetworkServicesEdgeCacheOriginOriginRedirect</a></code> | origin_redirect block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.port">Port</a></code> | <code>double</code> | The port to connect to the origin on. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#project NetworkServicesEdgeCacheOrigin#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.protocol">Protocol</a></code> | <code>string</code> | The protocol to use to connect to the configured origin. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.retryConditions">RetryConditions</a></code> | <code>string[]</code> | Specifies one or more retry conditions for the configured origin. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.timeout">Timeout</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout">NetworkServicesEdgeCacheOriginTimeout</a></code> | timeout block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts">NetworkServicesEdgeCacheOriginTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#name NetworkServicesEdgeCacheOrigin#name}

---

##### `OriginAddress`<sup>Required</sup> <a name="OriginAddress" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.originAddress"></a>

```csharp
public string OriginAddress { get; set; }
```

- *Type:* string

A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud Storage bucket.

This address will be used as the origin for cache requests - e.g. FQDN: media-backend.example.com, IPv4: 35.218.1.1, IPv6: 2607:f8b0:4012:809::200e, Cloud Storage: gs://bucketname

When providing an FQDN (hostname), it must be publicly resolvable (e.g. via Google public DNS) and IP addresses must be publicly routable.  It must not contain a protocol (e.g., https://) and it must not contain any slashes.
If a Cloud Storage bucket is provided, it must be in the canonical "gs://bucketname" format. Other forms, such as "storage.googleapis.com", will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#origin_address NetworkServicesEdgeCacheOrigin#origin_address}

---

##### `AwsV4Authentication`<sup>Optional</sup> <a name="AwsV4Authentication" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.awsV4Authentication"></a>

```csharp
public NetworkServicesEdgeCacheOriginAwsV4Authentication AwsV4Authentication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication">NetworkServicesEdgeCacheOriginAwsV4Authentication</a>

aws_v4_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#aws_v4_authentication NetworkServicesEdgeCacheOrigin#aws_v4_authentication}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#description NetworkServicesEdgeCacheOrigin#description}

---

##### `FailoverOrigin`<sup>Optional</sup> <a name="FailoverOrigin" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.failoverOrigin"></a>

```csharp
public string FailoverOrigin { get; set; }
```

- *Type:* string

The Origin resource to try when the current origin cannot be reached.

After maxAttempts is reached, the configured failoverOrigin will be used to fulfil the request.

The value of timeout.maxAttemptsTimeout dictates the timeout across all origins.
A reference to a Topic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#failover_origin NetworkServicesEdgeCacheOrigin#failover_origin}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#id NetworkServicesEdgeCacheOrigin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the EdgeCache resource.

*Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#labels NetworkServicesEdgeCacheOrigin#labels}

---

##### `MaxAttempts`<sup>Optional</sup> <a name="MaxAttempts" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.maxAttempts"></a>

```csharp
public double MaxAttempts { get; set; }
```

- *Type:* double

The maximum number of attempts to cache fill from this origin.

Another attempt is made when a cache fill fails with one of the retryConditions.

Once maxAttempts to this origin have failed the failoverOrigin will be used, if one is specified. That failoverOrigin may specify its own maxAttempts,
retryConditions and failoverOrigin to control its own cache fill failures.

The total number of allowed attempts to cache fill across this and failover origins is limited to four.
The total time allowed for cache fill attempts across this and failover origins can be controlled with maxAttemptsTimeout.

The last valid, non-retried response from all origins will be returned to the client.
If no origin returns a valid response, an HTTP 502 will be returned to the client.

Defaults to 1. Must be a value greater than 0 and less than 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#max_attempts NetworkServicesEdgeCacheOrigin#max_attempts}

---

##### `OriginOverrideAction`<sup>Optional</sup> <a name="OriginOverrideAction" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.originOverrideAction"></a>

```csharp
public NetworkServicesEdgeCacheOriginOriginOverrideAction OriginOverrideAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction">NetworkServicesEdgeCacheOriginOriginOverrideAction</a>

origin_override_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#origin_override_action NetworkServicesEdgeCacheOrigin#origin_override_action}

---

##### `OriginRedirect`<sup>Optional</sup> <a name="OriginRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.originRedirect"></a>

```csharp
public NetworkServicesEdgeCacheOriginOriginRedirect OriginRedirect { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect">NetworkServicesEdgeCacheOriginOriginRedirect</a>

origin_redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#origin_redirect NetworkServicesEdgeCacheOrigin#origin_redirect}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port to connect to the origin on.

Defaults to port 443 for HTTP2 and HTTPS protocols, and port 80 for HTTP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#port NetworkServicesEdgeCacheOrigin#port}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#project NetworkServicesEdgeCacheOrigin#project}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The protocol to use to connect to the configured origin.

Defaults to HTTP2, and it is strongly recommended that users use HTTP2 for both security & performance.

When using HTTP2 or HTTPS as the protocol, a valid, publicly-signed, unexpired TLS (SSL) certificate must be presented by the origin server. Possible values: ["HTTP2", "HTTPS", "HTTP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#protocol NetworkServicesEdgeCacheOrigin#protocol}

---

##### `RetryConditions`<sup>Optional</sup> <a name="RetryConditions" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.retryConditions"></a>

```csharp
public string[] RetryConditions { get; set; }
```

- *Type:* string[]

Specifies one or more retry conditions for the configured origin.

If the failure mode during a connection attempt to the origin matches the configured retryCondition(s),
the origin request will be retried up to maxAttempts times. The failoverOrigin, if configured, will then be used to satisfy the request.

The default retryCondition is "CONNECT_FAILURE".

retryConditions apply to this origin, and not subsequent failoverOrigin(s),
which may specify their own retryConditions and maxAttempts.

Valid values are:

* CONNECT_FAILURE: Retry on failures connecting to origins, for example due to connection timeouts.
* HTTP_5XX: Retry if the origin responds with any 5xx response code, or if the origin does not respond at all, example: disconnects, reset, read timeout, connection failure, and refused streams.
* GATEWAY_ERROR: Similar to 5xx, but only applies to response codes 502, 503 or 504.
* RETRIABLE_4XX: Retry for retriable 4xx response codes, which include HTTP 409 (Conflict) and HTTP 429 (Too Many Requests)
* NOT_FOUND: Retry if the origin returns a HTTP 404 (Not Found). This can be useful when generating video content, and the segment is not available yet.
* FORBIDDEN: Retry if the origin returns a HTTP 403 (Forbidden). Possible values: ["CONNECT_FAILURE", "HTTP_5XX", "GATEWAY_ERROR", "RETRIABLE_4XX", "NOT_FOUND", "FORBIDDEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#retry_conditions NetworkServicesEdgeCacheOrigin#retry_conditions}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.timeout"></a>

```csharp
public NetworkServicesEdgeCacheOriginTimeout Timeout { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout">NetworkServicesEdgeCacheOriginTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#timeout NetworkServicesEdgeCacheOrigin#timeout}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.timeouts"></a>

```csharp
public NetworkServicesEdgeCacheOriginTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts">NetworkServicesEdgeCacheOriginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#timeouts NetworkServicesEdgeCacheOrigin#timeouts}

---

### NetworkServicesEdgeCacheOriginOriginOverrideAction <a name="NetworkServicesEdgeCacheOriginOriginOverrideAction" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesEdgeCacheOriginOriginOverrideAction {
    NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction HeaderAction = null,
    NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite UrlRewrite = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction.property.headerAction">HeaderAction</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a></code> | header_action block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction.property.urlRewrite">UrlRewrite</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a></code> | url_rewrite block. |

---

##### `HeaderAction`<sup>Optional</sup> <a name="HeaderAction" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction.property.headerAction"></a>

```csharp
public NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction HeaderAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a>

header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#header_action NetworkServicesEdgeCacheOrigin#header_action}

---

##### `UrlRewrite`<sup>Optional</sup> <a name="UrlRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction.property.urlRewrite"></a>

```csharp
public NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite UrlRewrite { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a>

url_rewrite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#url_rewrite NetworkServicesEdgeCacheOrigin#url_rewrite}

---

### NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction <a name="NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction {
    object RequestHeadersToAdd = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction.property.requestHeadersToAdd">RequestHeadersToAdd</a></code> | <code>object</code> | request_headers_to_add block. |

---

##### `RequestHeadersToAdd`<sup>Optional</sup> <a name="RequestHeadersToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction.property.requestHeadersToAdd"></a>

```csharp
public object RequestHeadersToAdd { get; set; }
```

- *Type:* object

request_headers_to_add block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#request_headers_to_add NetworkServicesEdgeCacheOrigin#request_headers_to_add}

---

### NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd <a name="NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd {
    string HeaderName,
    string HeaderValue,
    object Replace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.headerName">HeaderName</a></code> | <code>string</code> | The name of the header to add. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.headerValue">HeaderValue</a></code> | <code>string</code> | The value of the header to add. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.replace">Replace</a></code> | <code>object</code> | Whether to replace all existing headers with the same name. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.headerName"></a>

```csharp
public string HeaderName { get; set; }
```

- *Type:* string

The name of the header to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#header_name NetworkServicesEdgeCacheOrigin#header_name}

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.headerValue"></a>

```csharp
public string HeaderValue { get; set; }
```

- *Type:* string

The value of the header to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#header_value NetworkServicesEdgeCacheOrigin#header_value}

---

##### `Replace`<sup>Optional</sup> <a name="Replace" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.replace"></a>

```csharp
public object Replace { get; set; }
```

- *Type:* object

Whether to replace all existing headers with the same name.

By default, added header values are appended
to the response or request headers with the
same field names. The added values are
separated by commas.

To overwrite existing values, set 'replace' to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#replace NetworkServicesEdgeCacheOrigin#replace}

---

### NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite <a name="NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite {
    string HostRewrite = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite.property.hostRewrite">HostRewrite</a></code> | <code>string</code> | Prior to forwarding the request to the selected origin, the request's host header is replaced with contents of the hostRewrite. |

---

##### `HostRewrite`<sup>Optional</sup> <a name="HostRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite.property.hostRewrite"></a>

```csharp
public string HostRewrite { get; set; }
```

- *Type:* string

Prior to forwarding the request to the selected origin, the request's host header is replaced with contents of the hostRewrite.

This value must be between 1 and 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#host_rewrite NetworkServicesEdgeCacheOrigin#host_rewrite}

---

### NetworkServicesEdgeCacheOriginOriginRedirect <a name="NetworkServicesEdgeCacheOriginOriginRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesEdgeCacheOriginOriginRedirect {
    string[] RedirectConditions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect.property.redirectConditions">RedirectConditions</a></code> | <code>string[]</code> | The set of redirect response codes that the CDN follows. Values of [RedirectConditions](https://cloud.google.com/media-cdn/docs/reference/rest/v1/projects.locations.edgeCacheOrigins#redirectconditions) are accepted. |

---

##### `RedirectConditions`<sup>Optional</sup> <a name="RedirectConditions" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect.property.redirectConditions"></a>

```csharp
public string[] RedirectConditions { get; set; }
```

- *Type:* string[]

The set of redirect response codes that the CDN follows. Values of [RedirectConditions](https://cloud.google.com/media-cdn/docs/reference/rest/v1/projects.locations.edgeCacheOrigins#redirectconditions) are accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#redirect_conditions NetworkServicesEdgeCacheOrigin#redirect_conditions}

---

### NetworkServicesEdgeCacheOriginTimeout <a name="NetworkServicesEdgeCacheOriginTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesEdgeCacheOriginTimeout {
    string ConnectTimeout = null,
    string MaxAttemptsTimeout = null,
    string ReadTimeout = null,
    string ResponseTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout.property.connectTimeout">ConnectTimeout</a></code> | <code>string</code> | The maximum duration to wait for a single origin connection to be established, including DNS lookup, TLS handshake and TCP/QUIC connection establishment. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout.property.maxAttemptsTimeout">MaxAttemptsTimeout</a></code> | <code>string</code> | The maximum time across all connection attempts to the origin, including failover origins, before returning an error to the client. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout.property.readTimeout">ReadTimeout</a></code> | <code>string</code> | The maximum duration to wait between reads of a single HTTP connection/stream. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout.property.responseTimeout">ResponseTimeout</a></code> | <code>string</code> | The maximum duration to wait for the last byte of a response to arrive when reading from the HTTP connection/stream. |

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout.property.connectTimeout"></a>

```csharp
public string ConnectTimeout { get; set; }
```

- *Type:* string

The maximum duration to wait for a single origin connection to be established, including DNS lookup, TLS handshake and TCP/QUIC connection establishment.

Defaults to 5 seconds. The timeout must be a value between 1s and 15s.

The connectTimeout capped by the deadline set by the request's maxAttemptsTimeout.  The last connection attempt may have a smaller connectTimeout in order to adhere to the overall maxAttemptsTimeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#connect_timeout NetworkServicesEdgeCacheOrigin#connect_timeout}

---

##### `MaxAttemptsTimeout`<sup>Optional</sup> <a name="MaxAttemptsTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout.property.maxAttemptsTimeout"></a>

```csharp
public string MaxAttemptsTimeout { get; set; }
```

- *Type:* string

The maximum time across all connection attempts to the origin, including failover origins, before returning an error to the client.

A HTTP 504 will be returned if the timeout is reached before a response is returned.

Defaults to 15 seconds. The timeout must be a value between 1s and 30s.

If a failoverOrigin is specified, the maxAttemptsTimeout of the first configured origin sets the deadline for all connection attempts across all failoverOrigins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#max_attempts_timeout NetworkServicesEdgeCacheOrigin#max_attempts_timeout}

---

##### `ReadTimeout`<sup>Optional</sup> <a name="ReadTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout.property.readTimeout"></a>

```csharp
public string ReadTimeout { get; set; }
```

- *Type:* string

The maximum duration to wait between reads of a single HTTP connection/stream.

Defaults to 15 seconds.  The timeout must be a value between 1s and 30s.

The readTimeout is capped by the responseTimeout.  All reads of the HTTP connection/stream must be completed by the deadline set by the responseTimeout.

If the response headers have already been written to the connection, the response will be truncated and logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#read_timeout NetworkServicesEdgeCacheOrigin#read_timeout}

---

##### `ResponseTimeout`<sup>Optional</sup> <a name="ResponseTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout.property.responseTimeout"></a>

```csharp
public string ResponseTimeout { get; set; }
```

- *Type:* string

The maximum duration to wait for the last byte of a response to arrive when reading from the HTTP connection/stream.

Defaults to 30 seconds. The timeout must be a value between 1s and 120s.

The responseTimeout starts after the connection has been established.

This also applies to HTTP Chunked Transfer Encoding responses, and/or when an open-ended Range request is made to the origin. Origins that take longer to write additional bytes to the response than the configured responseTimeout will result in an error being returned to the client.

If the response headers have already been written to the connection, the response will be truncated and logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#response_timeout NetworkServicesEdgeCacheOrigin#response_timeout}

---

### NetworkServicesEdgeCacheOriginTimeouts <a name="NetworkServicesEdgeCacheOriginTimeouts" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesEdgeCacheOriginTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#create NetworkServicesEdgeCacheOrigin#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#delete NetworkServicesEdgeCacheOrigin#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#update NetworkServicesEdgeCacheOrigin#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#create NetworkServicesEdgeCacheOrigin#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#delete NetworkServicesEdgeCacheOrigin#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_services_edge_cache_origin#update NetworkServicesEdgeCacheOrigin#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference <a name="NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.originRegionInput">OriginRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.secretAccessKeyVersionInput">SecretAccessKeyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.originRegion">OriginRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.secretAccessKeyVersion">SecretAccessKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication">NetworkServicesEdgeCacheOriginAwsV4Authentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.accessKeyIdInput"></a>

```csharp
public string AccessKeyIdInput { get; }
```

- *Type:* string

---

##### `OriginRegionInput`<sup>Optional</sup> <a name="OriginRegionInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.originRegionInput"></a>

```csharp
public string OriginRegionInput { get; }
```

- *Type:* string

---

##### `SecretAccessKeyVersionInput`<sup>Optional</sup> <a name="SecretAccessKeyVersionInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.secretAccessKeyVersionInput"></a>

```csharp
public string SecretAccessKeyVersionInput { get; }
```

- *Type:* string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; }
```

- *Type:* string

---

##### `OriginRegion`<sup>Required</sup> <a name="OriginRegion" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.originRegion"></a>

```csharp
public string OriginRegion { get; }
```

- *Type:* string

---

##### `SecretAccessKeyVersion`<sup>Required</sup> <a name="SecretAccessKeyVersion" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.secretAccessKeyVersion"></a>

```csharp
public string SecretAccessKeyVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesEdgeCacheOriginAwsV4Authentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication">NetworkServicesEdgeCacheOriginAwsV4Authentication</a>

---


### NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference <a name="NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.putRequestHeadersToAdd">PutRequestHeadersToAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.resetRequestHeadersToAdd">ResetRequestHeadersToAdd</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestHeadersToAdd` <a name="PutRequestHeadersToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.putRequestHeadersToAdd"></a>

```csharp
private void PutRequestHeadersToAdd(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.putRequestHeadersToAdd.parameter.value"></a>

- *Type:* object

---

##### `ResetRequestHeadersToAdd` <a name="ResetRequestHeadersToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.resetRequestHeadersToAdd"></a>

```csharp
private void ResetRequestHeadersToAdd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.requestHeadersToAdd">RequestHeadersToAdd</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.requestHeadersToAddInput">RequestHeadersToAddInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequestHeadersToAdd`<sup>Required</sup> <a name="RequestHeadersToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.requestHeadersToAdd"></a>

```csharp
public NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList RequestHeadersToAdd { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList</a>

---

##### `RequestHeadersToAddInput`<sup>Optional</sup> <a name="RequestHeadersToAddInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.requestHeadersToAddInput"></a>

```csharp
public object RequestHeadersToAddInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a>

---


### NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList <a name="NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.get"></a>

```csharp
private NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference <a name="NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.resetReplace">ResetReplace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReplace` <a name="ResetReplace" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.resetReplace"></a>

```csharp
private void ResetReplace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerValueInput">HeaderValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.replaceInput">ReplaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerName">HeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerValue">HeaderValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.replace">Replace</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerNameInput"></a>

```csharp
public string HeaderNameInput { get; }
```

- *Type:* string

---

##### `HeaderValueInput`<sup>Optional</sup> <a name="HeaderValueInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerValueInput"></a>

```csharp
public string HeaderValueInput { get; }
```

- *Type:* string

---

##### `ReplaceInput`<sup>Optional</sup> <a name="ReplaceInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.replaceInput"></a>

```csharp
public object ReplaceInput { get; }
```

- *Type:* object

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerName"></a>

```csharp
public string HeaderName { get; }
```

- *Type:* string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerValue"></a>

```csharp
public string HeaderValue { get; }
```

- *Type:* string

---

##### `Replace`<sup>Required</sup> <a name="Replace" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.replace"></a>

```csharp
public object Replace { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference <a name="NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putHeaderAction">PutHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putUrlRewrite">PutUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resetHeaderAction">ResetHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resetUrlRewrite">ResetUrlRewrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaderAction` <a name="PutHeaderAction" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putHeaderAction"></a>

```csharp
private void PutHeaderAction(NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putHeaderAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a>

---

##### `PutUrlRewrite` <a name="PutUrlRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putUrlRewrite"></a>

```csharp
private void PutUrlRewrite(NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putUrlRewrite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a>

---

##### `ResetHeaderAction` <a name="ResetHeaderAction" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resetHeaderAction"></a>

```csharp
private void ResetHeaderAction()
```

##### `ResetUrlRewrite` <a name="ResetUrlRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resetUrlRewrite"></a>

```csharp
private void ResetUrlRewrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.headerAction">HeaderAction</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.urlRewrite">UrlRewrite</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference">NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.headerActionInput">HeaderActionInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.urlRewriteInput">UrlRewriteInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction">NetworkServicesEdgeCacheOriginOriginOverrideAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderAction`<sup>Required</sup> <a name="HeaderAction" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.headerAction"></a>

```csharp
public NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference HeaderAction { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference</a>

---

##### `UrlRewrite`<sup>Required</sup> <a name="UrlRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.urlRewrite"></a>

```csharp
public NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference UrlRewrite { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference">NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference</a>

---

##### `HeaderActionInput`<sup>Optional</sup> <a name="HeaderActionInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.headerActionInput"></a>

```csharp
public NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction HeaderActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a>

---

##### `UrlRewriteInput`<sup>Optional</sup> <a name="UrlRewriteInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.urlRewriteInput"></a>

```csharp
public NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite UrlRewriteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesEdgeCacheOriginOriginOverrideAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction">NetworkServicesEdgeCacheOriginOriginOverrideAction</a>

---


### NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference <a name="NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.resetHostRewrite">ResetHostRewrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostRewrite` <a name="ResetHostRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.resetHostRewrite"></a>

```csharp
private void ResetHostRewrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.hostRewriteInput">HostRewriteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.hostRewrite">HostRewrite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostRewriteInput`<sup>Optional</sup> <a name="HostRewriteInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.hostRewriteInput"></a>

```csharp
public string HostRewriteInput { get; }
```

- *Type:* string

---

##### `HostRewrite`<sup>Required</sup> <a name="HostRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.hostRewrite"></a>

```csharp
public string HostRewrite { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a>

---


### NetworkServicesEdgeCacheOriginOriginRedirectOutputReference <a name="NetworkServicesEdgeCacheOriginOriginRedirectOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesEdgeCacheOriginOriginRedirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.resetRedirectConditions">ResetRedirectConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRedirectConditions` <a name="ResetRedirectConditions" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.resetRedirectConditions"></a>

```csharp
private void ResetRedirectConditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.redirectConditionsInput">RedirectConditionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.redirectConditions">RedirectConditions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect">NetworkServicesEdgeCacheOriginOriginRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RedirectConditionsInput`<sup>Optional</sup> <a name="RedirectConditionsInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.redirectConditionsInput"></a>

```csharp
public string[] RedirectConditionsInput { get; }
```

- *Type:* string[]

---

##### `RedirectConditions`<sup>Required</sup> <a name="RedirectConditions" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.redirectConditions"></a>

```csharp
public string[] RedirectConditions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesEdgeCacheOriginOriginRedirect InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect">NetworkServicesEdgeCacheOriginOriginRedirect</a>

---


### NetworkServicesEdgeCacheOriginTimeoutOutputReference <a name="NetworkServicesEdgeCacheOriginTimeoutOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesEdgeCacheOriginTimeoutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resetMaxAttemptsTimeout">ResetMaxAttemptsTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resetReadTimeout">ResetReadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resetResponseTimeout">ResetResponseTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resetConnectTimeout"></a>

```csharp
private void ResetConnectTimeout()
```

##### `ResetMaxAttemptsTimeout` <a name="ResetMaxAttemptsTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resetMaxAttemptsTimeout"></a>

```csharp
private void ResetMaxAttemptsTimeout()
```

##### `ResetReadTimeout` <a name="ResetReadTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resetReadTimeout"></a>

```csharp
private void ResetReadTimeout()
```

##### `ResetResponseTimeout` <a name="ResetResponseTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resetResponseTimeout"></a>

```csharp
private void ResetResponseTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.maxAttemptsTimeoutInput">MaxAttemptsTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.readTimeoutInput">ReadTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.responseTimeoutInput">ResponseTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.maxAttemptsTimeout">MaxAttemptsTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.readTimeout">ReadTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.responseTimeout">ResponseTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout">NetworkServicesEdgeCacheOriginTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.connectTimeoutInput"></a>

```csharp
public string ConnectTimeoutInput { get; }
```

- *Type:* string

---

##### `MaxAttemptsTimeoutInput`<sup>Optional</sup> <a name="MaxAttemptsTimeoutInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.maxAttemptsTimeoutInput"></a>

```csharp
public string MaxAttemptsTimeoutInput { get; }
```

- *Type:* string

---

##### `ReadTimeoutInput`<sup>Optional</sup> <a name="ReadTimeoutInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.readTimeoutInput"></a>

```csharp
public string ReadTimeoutInput { get; }
```

- *Type:* string

---

##### `ResponseTimeoutInput`<sup>Optional</sup> <a name="ResponseTimeoutInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.responseTimeoutInput"></a>

```csharp
public string ResponseTimeoutInput { get; }
```

- *Type:* string

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.connectTimeout"></a>

```csharp
public string ConnectTimeout { get; }
```

- *Type:* string

---

##### `MaxAttemptsTimeout`<sup>Required</sup> <a name="MaxAttemptsTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.maxAttemptsTimeout"></a>

```csharp
public string MaxAttemptsTimeout { get; }
```

- *Type:* string

---

##### `ReadTimeout`<sup>Required</sup> <a name="ReadTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.readTimeout"></a>

```csharp
public string ReadTimeout { get; }
```

- *Type:* string

---

##### `ResponseTimeout`<sup>Required</sup> <a name="ResponseTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.responseTimeout"></a>

```csharp
public string ResponseTimeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesEdgeCacheOriginTimeout InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout">NetworkServicesEdgeCacheOriginTimeout</a>

---


### NetworkServicesEdgeCacheOriginTimeoutsOutputReference <a name="NetworkServicesEdgeCacheOriginTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkServicesEdgeCacheOriginTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



