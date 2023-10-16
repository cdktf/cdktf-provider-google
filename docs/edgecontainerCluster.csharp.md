# `google_edgecontainer_cluster`

Refer to the Terraform Registory for docs: [`google_edgecontainer_cluster`](https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster).

# `edgecontainerCluster` Submodule <a name="`edgecontainerCluster` Submodule" id="@cdktf/provider-google.edgecontainerCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EdgecontainerCluster <a name="EdgecontainerCluster" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster google_edgecontainer_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerCluster(Construct Scope, string Id, EdgecontainerClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig">EdgecontainerClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig">EdgecontainerClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putAuthorization">PutAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putControlPlane">PutControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putControlPlaneEncryption">PutControlPlaneEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putFleet">PutFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putMaintenancePolicy">PutMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putNetworking">PutNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putSystemAddonsConfig">PutSystemAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetControlPlane">ResetControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetControlPlaneEncryption">ResetControlPlaneEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetDefaultMaxPodsPerNode">ResetDefaultMaxPodsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetExternalLoadBalancerIpv4AddressPools">ResetExternalLoadBalancerIpv4AddressPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetMaintenancePolicy">ResetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetReleaseChannel">ResetReleaseChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetSystemAddonsConfig">ResetSystemAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetTargetVersion">ResetTargetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAuthorization` <a name="PutAuthorization" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putAuthorization"></a>

```csharp
private void PutAuthorization(EdgecontainerClusterAuthorization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a>

---

##### `PutControlPlane` <a name="PutControlPlane" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putControlPlane"></a>

```csharp
private void PutControlPlane(EdgecontainerClusterControlPlane Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putControlPlane.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a>

---

##### `PutControlPlaneEncryption` <a name="PutControlPlaneEncryption" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putControlPlaneEncryption"></a>

```csharp
private void PutControlPlaneEncryption(EdgecontainerClusterControlPlaneEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putControlPlaneEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a>

---

##### `PutFleet` <a name="PutFleet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putFleet"></a>

```csharp
private void PutFleet(EdgecontainerClusterFleet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a>

---

##### `PutMaintenancePolicy` <a name="PutMaintenancePolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putMaintenancePolicy"></a>

```csharp
private void PutMaintenancePolicy(EdgecontainerClusterMaintenancePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a>

---

##### `PutNetworking` <a name="PutNetworking" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putNetworking"></a>

```csharp
private void PutNetworking(EdgecontainerClusterNetworking Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putNetworking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a>

---

##### `PutSystemAddonsConfig` <a name="PutSystemAddonsConfig" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putSystemAddonsConfig"></a>

```csharp
private void PutSystemAddonsConfig(EdgecontainerClusterSystemAddonsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putSystemAddonsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(EdgecontainerClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts">EdgecontainerClusterTimeouts</a>

---

##### `ResetControlPlane` <a name="ResetControlPlane" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetControlPlane"></a>

```csharp
private void ResetControlPlane()
```

##### `ResetControlPlaneEncryption` <a name="ResetControlPlaneEncryption" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetControlPlaneEncryption"></a>

```csharp
private void ResetControlPlaneEncryption()
```

##### `ResetDefaultMaxPodsPerNode` <a name="ResetDefaultMaxPodsPerNode" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetDefaultMaxPodsPerNode"></a>

```csharp
private void ResetDefaultMaxPodsPerNode()
```

##### `ResetExternalLoadBalancerIpv4AddressPools` <a name="ResetExternalLoadBalancerIpv4AddressPools" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetExternalLoadBalancerIpv4AddressPools"></a>

```csharp
private void ResetExternalLoadBalancerIpv4AddressPools()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMaintenancePolicy` <a name="ResetMaintenancePolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetMaintenancePolicy"></a>

```csharp
private void ResetMaintenancePolicy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetReleaseChannel` <a name="ResetReleaseChannel" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetReleaseChannel"></a>

```csharp
private void ResetReleaseChannel()
```

##### `ResetSystemAddonsConfig` <a name="ResetSystemAddonsConfig" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetSystemAddonsConfig"></a>

```csharp
private void ResetSystemAddonsConfig()
```

##### `ResetTargetVersion` <a name="ResetTargetVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetTargetVersion"></a>

```csharp
private void ResetTargetVersion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EdgecontainerCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EdgecontainerCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EdgecontainerCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference">EdgecontainerClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.clusterCaCertificate">ClusterCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlane">ControlPlane</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference">EdgecontainerClusterControlPlaneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneEncryption">ControlPlaneEncryption</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference">EdgecontainerClusterControlPlaneEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneVersion">ControlPlaneVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference">EdgecontainerClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.maintenanceEvents">MaintenanceEvents</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList">EdgecontainerClusterMaintenanceEventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference">EdgecontainerClusterMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.networking">Networking</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference">EdgecontainerClusterNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.nodeVersion">NodeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.systemAddonsConfig">SystemAddonsConfig</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference">EdgecontainerClusterSystemAddonsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference">EdgecontainerClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.authorizationInput">AuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneEncryptionInput">ControlPlaneEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneInput">ControlPlaneInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.defaultMaxPodsPerNodeInput">DefaultMaxPodsPerNodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.externalLoadBalancerIpv4AddressPoolsInput">ExternalLoadBalancerIpv4AddressPoolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.fleetInput">FleetInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.maintenancePolicyInput">MaintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.networkingInput">NetworkingInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.releaseChannelInput">ReleaseChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.systemAddonsConfigInput">SystemAddonsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.targetVersionInput">TargetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.defaultMaxPodsPerNode">DefaultMaxPodsPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.externalLoadBalancerIpv4AddressPools">ExternalLoadBalancerIpv4AddressPools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.releaseChannel">ReleaseChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.targetVersion">TargetVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.authorization"></a>

```csharp
public EdgecontainerClusterAuthorizationOutputReference Authorization { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference">EdgecontainerClusterAuthorizationOutputReference</a>

---

##### `ClusterCaCertificate`<sup>Required</sup> <a name="ClusterCaCertificate" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.clusterCaCertificate"></a>

```csharp
public string ClusterCaCertificate { get; }
```

- *Type:* string

---

##### `ControlPlane`<sup>Required</sup> <a name="ControlPlane" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlane"></a>

```csharp
public EdgecontainerClusterControlPlaneOutputReference ControlPlane { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference">EdgecontainerClusterControlPlaneOutputReference</a>

---

##### `ControlPlaneEncryption`<sup>Required</sup> <a name="ControlPlaneEncryption" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneEncryption"></a>

```csharp
public EdgecontainerClusterControlPlaneEncryptionOutputReference ControlPlaneEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference">EdgecontainerClusterControlPlaneEncryptionOutputReference</a>

---

##### `ControlPlaneVersion`<sup>Required</sup> <a name="ControlPlaneVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneVersion"></a>

```csharp
public string ControlPlaneVersion { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.fleet"></a>

```csharp
public EdgecontainerClusterFleetOutputReference Fleet { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference">EdgecontainerClusterFleetOutputReference</a>

---

##### `MaintenanceEvents`<sup>Required</sup> <a name="MaintenanceEvents" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.maintenanceEvents"></a>

```csharp
public EdgecontainerClusterMaintenanceEventsList MaintenanceEvents { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList">EdgecontainerClusterMaintenanceEventsList</a>

---

##### `MaintenancePolicy`<sup>Required</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.maintenancePolicy"></a>

```csharp
public EdgecontainerClusterMaintenancePolicyOutputReference MaintenancePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference">EdgecontainerClusterMaintenancePolicyOutputReference</a>

---

##### `Networking`<sup>Required</sup> <a name="Networking" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.networking"></a>

```csharp
public EdgecontainerClusterNetworkingOutputReference Networking { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference">EdgecontainerClusterNetworkingOutputReference</a>

---

##### `NodeVersion`<sup>Required</sup> <a name="NodeVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.nodeVersion"></a>

```csharp
public string NodeVersion { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SystemAddonsConfig`<sup>Required</sup> <a name="SystemAddonsConfig" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.systemAddonsConfig"></a>

```csharp
public EdgecontainerClusterSystemAddonsConfigOutputReference SystemAddonsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference">EdgecontainerClusterSystemAddonsConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.timeouts"></a>

```csharp
public EdgecontainerClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference">EdgecontainerClusterTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.authorizationInput"></a>

```csharp
public EdgecontainerClusterAuthorization AuthorizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a>

---

##### `ControlPlaneEncryptionInput`<sup>Optional</sup> <a name="ControlPlaneEncryptionInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneEncryptionInput"></a>

```csharp
public EdgecontainerClusterControlPlaneEncryption ControlPlaneEncryptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a>

---

##### `ControlPlaneInput`<sup>Optional</sup> <a name="ControlPlaneInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneInput"></a>

```csharp
public EdgecontainerClusterControlPlane ControlPlaneInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a>

---

##### `DefaultMaxPodsPerNodeInput`<sup>Optional</sup> <a name="DefaultMaxPodsPerNodeInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.defaultMaxPodsPerNodeInput"></a>

```csharp
public double DefaultMaxPodsPerNodeInput { get; }
```

- *Type:* double

---

##### `ExternalLoadBalancerIpv4AddressPoolsInput`<sup>Optional</sup> <a name="ExternalLoadBalancerIpv4AddressPoolsInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.externalLoadBalancerIpv4AddressPoolsInput"></a>

```csharp
public string[] ExternalLoadBalancerIpv4AddressPoolsInput { get; }
```

- *Type:* string[]

---

##### `FleetInput`<sup>Optional</sup> <a name="FleetInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.fleetInput"></a>

```csharp
public EdgecontainerClusterFleet FleetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MaintenancePolicyInput`<sup>Optional</sup> <a name="MaintenancePolicyInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.maintenancePolicyInput"></a>

```csharp
public EdgecontainerClusterMaintenancePolicy MaintenancePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkingInput`<sup>Optional</sup> <a name="NetworkingInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.networkingInput"></a>

```csharp
public EdgecontainerClusterNetworking NetworkingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReleaseChannelInput`<sup>Optional</sup> <a name="ReleaseChannelInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.releaseChannelInput"></a>

```csharp
public string ReleaseChannelInput { get; }
```

- *Type:* string

---

##### `SystemAddonsConfigInput`<sup>Optional</sup> <a name="SystemAddonsConfigInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.systemAddonsConfigInput"></a>

```csharp
public EdgecontainerClusterSystemAddonsConfig SystemAddonsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a>

---

##### `TargetVersionInput`<sup>Optional</sup> <a name="TargetVersionInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.targetVersionInput"></a>

```csharp
public string TargetVersionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DefaultMaxPodsPerNode`<sup>Required</sup> <a name="DefaultMaxPodsPerNode" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.defaultMaxPodsPerNode"></a>

```csharp
public double DefaultMaxPodsPerNode { get; }
```

- *Type:* double

---

##### `ExternalLoadBalancerIpv4AddressPools`<sup>Required</sup> <a name="ExternalLoadBalancerIpv4AddressPools" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.externalLoadBalancerIpv4AddressPools"></a>

```csharp
public string[] ExternalLoadBalancerIpv4AddressPools { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ReleaseChannel`<sup>Required</sup> <a name="ReleaseChannel" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.releaseChannel"></a>

```csharp
public string ReleaseChannel { get; }
```

- *Type:* string

---

##### `TargetVersion`<sup>Required</sup> <a name="TargetVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.targetVersion"></a>

```csharp
public string TargetVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EdgecontainerClusterAuthorization <a name="EdgecontainerClusterAuthorization" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterAuthorization {
    EdgecontainerClusterAuthorizationAdminUsers AdminUsers
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization.property.adminUsers">AdminUsers</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers">EdgecontainerClusterAuthorizationAdminUsers</a></code> | admin_users block. |

---

##### `AdminUsers`<sup>Required</sup> <a name="AdminUsers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization.property.adminUsers"></a>

```csharp
public EdgecontainerClusterAuthorizationAdminUsers AdminUsers { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers">EdgecontainerClusterAuthorizationAdminUsers</a>

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#admin_users EdgecontainerCluster#admin_users}

---

### EdgecontainerClusterAuthorizationAdminUsers <a name="EdgecontainerClusterAuthorizationAdminUsers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterAuthorizationAdminUsers {
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers.property.username">Username</a></code> | <code>string</code> | An active Google username. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

An active Google username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#username EdgecontainerCluster#username}

---

### EdgecontainerClusterConfig <a name="EdgecontainerClusterConfig" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    EdgecontainerClusterAuthorization Authorization,
    EdgecontainerClusterFleet Fleet,
    string Location,
    string Name,
    EdgecontainerClusterNetworking Networking,
    EdgecontainerClusterControlPlane ControlPlane = null,
    EdgecontainerClusterControlPlaneEncryption ControlPlaneEncryption = null,
    double DefaultMaxPodsPerNode = null,
    string[] ExternalLoadBalancerIpv4AddressPools = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    EdgecontainerClusterMaintenancePolicy MaintenancePolicy = null,
    string Project = null,
    string ReleaseChannel = null,
    EdgecontainerClusterSystemAddonsConfig SystemAddonsConfig = null,
    string TargetVersion = null,
    EdgecontainerClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.name">Name</a></code> | <code>string</code> | The GDCE cluster name. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.networking">Networking</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.controlPlane">ControlPlane</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.controlPlaneEncryption">ControlPlaneEncryption</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a></code> | control_plane_encryption block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.defaultMaxPodsPerNode">DefaultMaxPodsPerNode</a></code> | <code>double</code> | The default maximum number of pods per node used if a maximum value is not specified explicitly for a node pool in this cluster. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.externalLoadBalancerIpv4AddressPools">ExternalLoadBalancerIpv4AddressPools</a></code> | <code>string[]</code> | Address pools for cluster data plane external load balancing. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#id EdgecontainerCluster#id}. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-defined labels for the edgecloud cluster. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#project EdgecontainerCluster#project}. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.releaseChannel">ReleaseChannel</a></code> | <code>string</code> | The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"]. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.systemAddonsConfig">SystemAddonsConfig</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a></code> | system_addons_config block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.targetVersion">TargetVersion</a></code> | <code>string</code> | The target cluster version. For example: "1.5.0". |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts">EdgecontainerClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.authorization"></a>

```csharp
public EdgecontainerClusterAuthorization Authorization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#authorization EdgecontainerCluster#authorization}

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.fleet"></a>

```csharp
public EdgecontainerClusterFleet Fleet { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#fleet EdgecontainerCluster#fleet}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#location EdgecontainerCluster#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The GDCE cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#name EdgecontainerCluster#name}

---

##### `Networking`<sup>Required</sup> <a name="Networking" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.networking"></a>

```csharp
public EdgecontainerClusterNetworking Networking { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#networking EdgecontainerCluster#networking}

---

##### `ControlPlane`<sup>Optional</sup> <a name="ControlPlane" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.controlPlane"></a>

```csharp
public EdgecontainerClusterControlPlane ControlPlane { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#control_plane EdgecontainerCluster#control_plane}

---

##### `ControlPlaneEncryption`<sup>Optional</sup> <a name="ControlPlaneEncryption" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.controlPlaneEncryption"></a>

```csharp
public EdgecontainerClusterControlPlaneEncryption ControlPlaneEncryption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a>

control_plane_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#control_plane_encryption EdgecontainerCluster#control_plane_encryption}

---

##### `DefaultMaxPodsPerNode`<sup>Optional</sup> <a name="DefaultMaxPodsPerNode" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.defaultMaxPodsPerNode"></a>

```csharp
public double DefaultMaxPodsPerNode { get; set; }
```

- *Type:* double

The default maximum number of pods per node used if a maximum value is not specified explicitly for a node pool in this cluster.

If unspecified, the
Kubernetes default value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#default_max_pods_per_node EdgecontainerCluster#default_max_pods_per_node}

---

##### `ExternalLoadBalancerIpv4AddressPools`<sup>Optional</sup> <a name="ExternalLoadBalancerIpv4AddressPools" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.externalLoadBalancerIpv4AddressPools"></a>

```csharp
public string[] ExternalLoadBalancerIpv4AddressPools { get; set; }
```

- *Type:* string[]

Address pools for cluster data plane external load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#external_load_balancer_ipv4_address_pools EdgecontainerCluster#external_load_balancer_ipv4_address_pools}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#id EdgecontainerCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-defined labels for the edgecloud cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#labels EdgecontainerCluster#labels}

---

##### `MaintenancePolicy`<sup>Optional</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.maintenancePolicy"></a>

```csharp
public EdgecontainerClusterMaintenancePolicy MaintenancePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#maintenance_policy EdgecontainerCluster#maintenance_policy}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#project EdgecontainerCluster#project}.

---

##### `ReleaseChannel`<sup>Optional</sup> <a name="ReleaseChannel" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.releaseChannel"></a>

```csharp
public string ReleaseChannel { get; set; }
```

- *Type:* string

The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#release_channel EdgecontainerCluster#release_channel}

---

##### `SystemAddonsConfig`<sup>Optional</sup> <a name="SystemAddonsConfig" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.systemAddonsConfig"></a>

```csharp
public EdgecontainerClusterSystemAddonsConfig SystemAddonsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a>

system_addons_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#system_addons_config EdgecontainerCluster#system_addons_config}

---

##### `TargetVersion`<sup>Optional</sup> <a name="TargetVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.targetVersion"></a>

```csharp
public string TargetVersion { get; set; }
```

- *Type:* string

The target cluster version. For example: "1.5.0".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#target_version EdgecontainerCluster#target_version}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.timeouts"></a>

```csharp
public EdgecontainerClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts">EdgecontainerClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#timeouts EdgecontainerCluster#timeouts}

---

### EdgecontainerClusterControlPlane <a name="EdgecontainerClusterControlPlane" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterControlPlane {
    EdgecontainerClusterControlPlaneLocal Local = null,
    EdgecontainerClusterControlPlaneRemote Remote = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane.property.local">Local</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal">EdgecontainerClusterControlPlaneLocal</a></code> | local block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane.property.remote">Remote</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote">EdgecontainerClusterControlPlaneRemote</a></code> | remote block. |

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane.property.local"></a>

```csharp
public EdgecontainerClusterControlPlaneLocal Local { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal">EdgecontainerClusterControlPlaneLocal</a>

local block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#local EdgecontainerCluster#local}

---

##### `Remote`<sup>Optional</sup> <a name="Remote" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane.property.remote"></a>

```csharp
public EdgecontainerClusterControlPlaneRemote Remote { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote">EdgecontainerClusterControlPlaneRemote</a>

remote block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#remote EdgecontainerCluster#remote}

---

### EdgecontainerClusterControlPlaneEncryption <a name="EdgecontainerClusterControlPlaneEncryption" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterControlPlaneEncryption {
    string KmsKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption.property.kmsKey">KmsKey</a></code> | <code>string</code> | The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting control plane disks. If not specified, a Google-managed key will be used instead. |

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting control plane disks. If not specified, a Google-managed key will be used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#kms_key EdgecontainerCluster#kms_key}

---

### EdgecontainerClusterControlPlaneEncryptionKmsStatus <a name="EdgecontainerClusterControlPlaneEncryptionKmsStatus" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterControlPlaneEncryptionKmsStatus {

};
```


### EdgecontainerClusterControlPlaneLocal <a name="EdgecontainerClusterControlPlaneLocal" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterControlPlaneLocal {
    string MachineFilter = null,
    double NodeCount = null,
    string NodeLocation = null,
    string SharedDeploymentPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.machineFilter">MachineFilter</a></code> | <code>string</code> | Only machines matching this filter will be allowed to host control plane nodes. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.nodeCount">NodeCount</a></code> | <code>double</code> | The number of nodes to serve as replicas of the Control Plane. Only 1 and 3 are supported. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.nodeLocation">NodeLocation</a></code> | <code>string</code> | Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.sharedDeploymentPolicy">SharedDeploymentPolicy</a></code> | <code>string</code> | Policy configuration about how user applications are deployed. Possible values: ["SHARED_DEPLOYMENT_POLICY_UNSPECIFIED", "ALLOWED", "DISALLOWED"]. |

---

##### `MachineFilter`<sup>Optional</sup> <a name="MachineFilter" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.machineFilter"></a>

```csharp
public string MachineFilter { get; set; }
```

- *Type:* string

Only machines matching this filter will be allowed to host control plane nodes.

The filtering language accepts strings like "name=<name>",
and is documented here: [AIP-160](https://google.aip.dev/160).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#machine_filter EdgecontainerCluster#machine_filter}

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.nodeCount"></a>

```csharp
public double NodeCount { get; set; }
```

- *Type:* double

The number of nodes to serve as replicas of the Control Plane. Only 1 and 3 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#node_count EdgecontainerCluster#node_count}

---

##### `NodeLocation`<sup>Optional</sup> <a name="NodeLocation" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.nodeLocation"></a>

```csharp
public string NodeLocation { get; set; }
```

- *Type:* string

Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#node_location EdgecontainerCluster#node_location}

---

##### `SharedDeploymentPolicy`<sup>Optional</sup> <a name="SharedDeploymentPolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.sharedDeploymentPolicy"></a>

```csharp
public string SharedDeploymentPolicy { get; set; }
```

- *Type:* string

Policy configuration about how user applications are deployed. Possible values: ["SHARED_DEPLOYMENT_POLICY_UNSPECIFIED", "ALLOWED", "DISALLOWED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#shared_deployment_policy EdgecontainerCluster#shared_deployment_policy}

---

### EdgecontainerClusterControlPlaneRemote <a name="EdgecontainerClusterControlPlaneRemote" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterControlPlaneRemote {
    string NodeLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote.property.nodeLocation">NodeLocation</a></code> | <code>string</code> | Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'. |

---

##### `NodeLocation`<sup>Optional</sup> <a name="NodeLocation" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote.property.nodeLocation"></a>

```csharp
public string NodeLocation { get; set; }
```

- *Type:* string

Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#node_location EdgecontainerCluster#node_location}

---

### EdgecontainerClusterFleet <a name="EdgecontainerClusterFleet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterFleet {
    string Project
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet.property.project">Project</a></code> | <code>string</code> | The name of the Fleet host project where this cluster will be registered. Project names are formatted as 'projects/<project-number>'. |

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The name of the Fleet host project where this cluster will be registered. Project names are formatted as 'projects/<project-number>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#project EdgecontainerCluster#project}

---

### EdgecontainerClusterMaintenanceEvents <a name="EdgecontainerClusterMaintenanceEvents" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEvents.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterMaintenanceEvents {

};
```


### EdgecontainerClusterMaintenancePolicy <a name="EdgecontainerClusterMaintenancePolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterMaintenancePolicy {
    EdgecontainerClusterMaintenancePolicyWindow Window
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy.property.window">Window</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow">EdgecontainerClusterMaintenancePolicyWindow</a></code> | window block. |

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy.property.window"></a>

```csharp
public EdgecontainerClusterMaintenancePolicyWindow Window { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow">EdgecontainerClusterMaintenancePolicyWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#window EdgecontainerCluster#window}

---

### EdgecontainerClusterMaintenancePolicyWindow <a name="EdgecontainerClusterMaintenancePolicyWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterMaintenancePolicyWindow {
    EdgecontainerClusterMaintenancePolicyWindowRecurringWindow RecurringWindow
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow.property.recurringWindow">RecurringWindow</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a></code> | recurring_window block. |

---

##### `RecurringWindow`<sup>Required</sup> <a name="RecurringWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow.property.recurringWindow"></a>

```csharp
public EdgecontainerClusterMaintenancePolicyWindowRecurringWindow RecurringWindow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

recurring_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#recurring_window EdgecontainerCluster#recurring_window}

---

### EdgecontainerClusterMaintenancePolicyWindowRecurringWindow <a name="EdgecontainerClusterMaintenancePolicyWindowRecurringWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterMaintenancePolicyWindowRecurringWindow {
    string Recurrence = null,
    EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow Window = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.recurrence">Recurrence</a></code> | <code>string</code> | An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window recurs. They go on for the span of time between the start and end time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.window">Window</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a></code> | window block. |

---

##### `Recurrence`<sup>Optional</sup> <a name="Recurrence" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.recurrence"></a>

```csharp
public string Recurrence { get; set; }
```

- *Type:* string

An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window recurs. They go on for the span of time between the start and end time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#recurrence EdgecontainerCluster#recurrence}

---

##### `Window`<sup>Optional</sup> <a name="Window" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.window"></a>

```csharp
public EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow Window { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#window EdgecontainerCluster#window}

---

### EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow <a name="EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow {
    string EndTime = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.endTime">EndTime</a></code> | <code>string</code> | The time that the window ends. The end time must take place after the start time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.startTime">StartTime</a></code> | <code>string</code> | The time that the window first starts. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

The time that the window ends. The end time must take place after the start time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#end_time EdgecontainerCluster#end_time}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

The time that the window first starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#start_time EdgecontainerCluster#start_time}

---

### EdgecontainerClusterNetworking <a name="EdgecontainerClusterNetworking" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterNetworking {
    string[] ClusterIpv4CidrBlocks,
    string[] ServicesIpv4CidrBlocks,
    string[] ClusterIpv6CidrBlocks = null,
    string[] ServicesIpv6CidrBlocks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.clusterIpv4CidrBlocks">ClusterIpv4CidrBlocks</a></code> | <code>string[]</code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these blocks. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.servicesIpv4CidrBlocks">ServicesIpv4CidrBlocks</a></code> | <code>string[]</code> | All services in the cluster are assigned an RFC1918 IPv4 address from these blocks. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.clusterIpv6CidrBlocks">ClusterIpv6CidrBlocks</a></code> | <code>string[]</code> | If specified, dual stack mode is enabled and all pods in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.servicesIpv6CidrBlocks">ServicesIpv6CidrBlocks</a></code> | <code>string[]</code> | If specified, dual stack mode is enabled and all services in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address. |

---

##### `ClusterIpv4CidrBlocks`<sup>Required</sup> <a name="ClusterIpv4CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.clusterIpv4CidrBlocks"></a>

```csharp
public string[] ClusterIpv4CidrBlocks { get; set; }
```

- *Type:* string[]

All pods in the cluster are assigned an RFC1918 IPv4 address from these blocks.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#cluster_ipv4_cidr_blocks EdgecontainerCluster#cluster_ipv4_cidr_blocks}

---

##### `ServicesIpv4CidrBlocks`<sup>Required</sup> <a name="ServicesIpv4CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.servicesIpv4CidrBlocks"></a>

```csharp
public string[] ServicesIpv4CidrBlocks { get; set; }
```

- *Type:* string[]

All services in the cluster are assigned an RFC1918 IPv4 address from these blocks.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#services_ipv4_cidr_blocks EdgecontainerCluster#services_ipv4_cidr_blocks}

---

##### `ClusterIpv6CidrBlocks`<sup>Optional</sup> <a name="ClusterIpv6CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.clusterIpv6CidrBlocks"></a>

```csharp
public string[] ClusterIpv6CidrBlocks { get; set; }
```

- *Type:* string[]

If specified, dual stack mode is enabled and all pods in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#cluster_ipv6_cidr_blocks EdgecontainerCluster#cluster_ipv6_cidr_blocks}

---

##### `ServicesIpv6CidrBlocks`<sup>Optional</sup> <a name="ServicesIpv6CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.servicesIpv6CidrBlocks"></a>

```csharp
public string[] ServicesIpv6CidrBlocks { get; set; }
```

- *Type:* string[]

If specified, dual stack mode is enabled and all services in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#services_ipv6_cidr_blocks EdgecontainerCluster#services_ipv6_cidr_blocks}

---

### EdgecontainerClusterSystemAddonsConfig <a name="EdgecontainerClusterSystemAddonsConfig" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterSystemAddonsConfig {
    EdgecontainerClusterSystemAddonsConfigIngress Ingress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig.property.ingress">Ingress</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress">EdgecontainerClusterSystemAddonsConfigIngress</a></code> | ingress block. |

---

##### `Ingress`<sup>Optional</sup> <a name="Ingress" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig.property.ingress"></a>

```csharp
public EdgecontainerClusterSystemAddonsConfigIngress Ingress { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress">EdgecontainerClusterSystemAddonsConfigIngress</a>

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#ingress EdgecontainerCluster#ingress}

---

### EdgecontainerClusterSystemAddonsConfigIngress <a name="EdgecontainerClusterSystemAddonsConfigIngress" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterSystemAddonsConfigIngress {
    object Disabled = null,
    string Ipv4Vip = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress.property.disabled">Disabled</a></code> | <code>object</code> | Whether Ingress is disabled. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress.property.ipv4Vip">Ipv4Vip</a></code> | <code>string</code> | Ingress VIP. |

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Whether Ingress is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#disabled EdgecontainerCluster#disabled}

---

##### `Ipv4Vip`<sup>Optional</sup> <a name="Ipv4Vip" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress.property.ipv4Vip"></a>

```csharp
public string Ipv4Vip { get; set; }
```

- *Type:* string

Ingress VIP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#ipv4_vip EdgecontainerCluster#ipv4_vip}

---

### EdgecontainerClusterTimeouts <a name="EdgecontainerClusterTimeouts" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#create EdgecontainerCluster#create}. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#delete EdgecontainerCluster#delete}. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#update EdgecontainerCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#create EdgecontainerCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#delete EdgecontainerCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/edgecontainer_cluster#update EdgecontainerCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EdgecontainerClusterAuthorizationAdminUsersOutputReference <a name="EdgecontainerClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterAuthorizationAdminUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers">EdgecontainerClusterAuthorizationAdminUsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerClusterAuthorizationAdminUsers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers">EdgecontainerClusterAuthorizationAdminUsers</a>

---


### EdgecontainerClusterAuthorizationOutputReference <a name="EdgecontainerClusterAuthorizationOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.putAdminUsers">PutAdminUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminUsers` <a name="PutAdminUsers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.putAdminUsers"></a>

```csharp
private void PutAdminUsers(EdgecontainerClusterAuthorizationAdminUsers Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers">EdgecontainerClusterAuthorizationAdminUsers</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.adminUsers">AdminUsers</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference">EdgecontainerClusterAuthorizationAdminUsersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.adminUsersInput">AdminUsersInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers">EdgecontainerClusterAuthorizationAdminUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminUsers`<sup>Required</sup> <a name="AdminUsers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.adminUsers"></a>

```csharp
public EdgecontainerClusterAuthorizationAdminUsersOutputReference AdminUsers { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference">EdgecontainerClusterAuthorizationAdminUsersOutputReference</a>

---

##### `AdminUsersInput`<sup>Optional</sup> <a name="AdminUsersInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```csharp
public EdgecontainerClusterAuthorizationAdminUsers AdminUsersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers">EdgecontainerClusterAuthorizationAdminUsers</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerClusterAuthorization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a>

---


### EdgecontainerClusterControlPlaneEncryptionKmsStatusList <a name="EdgecontainerClusterControlPlaneEncryptionKmsStatusList" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterControlPlaneEncryptionKmsStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.get"></a>

```csharp
private EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference <a name="EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatus">EdgecontainerClusterControlPlaneEncryptionKmsStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerClusterControlPlaneEncryptionKmsStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatus">EdgecontainerClusterControlPlaneEncryptionKmsStatus</a>

---


### EdgecontainerClusterControlPlaneEncryptionOutputReference <a name="EdgecontainerClusterControlPlaneEncryptionOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterControlPlaneEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyActiveVersion">KmsKeyActiveVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyState">KmsKeyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsStatus">KmsStatus</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList">EdgecontainerClusterControlPlaneEncryptionKmsStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyActiveVersion`<sup>Required</sup> <a name="KmsKeyActiveVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyActiveVersion"></a>

```csharp
public string KmsKeyActiveVersion { get; }
```

- *Type:* string

---

##### `KmsKeyState`<sup>Required</sup> <a name="KmsKeyState" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyState"></a>

```csharp
public string KmsKeyState { get; }
```

- *Type:* string

---

##### `KmsStatus`<sup>Required</sup> <a name="KmsStatus" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsStatus"></a>

```csharp
public EdgecontainerClusterControlPlaneEncryptionKmsStatusList KmsStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList">EdgecontainerClusterControlPlaneEncryptionKmsStatusList</a>

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerClusterControlPlaneEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a>

---


### EdgecontainerClusterControlPlaneLocalOutputReference <a name="EdgecontainerClusterControlPlaneLocalOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterControlPlaneLocalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetMachineFilter">ResetMachineFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetNodeLocation">ResetNodeLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetSharedDeploymentPolicy">ResetSharedDeploymentPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMachineFilter` <a name="ResetMachineFilter" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetMachineFilter"></a>

```csharp
private void ResetMachineFilter()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetNodeCount"></a>

```csharp
private void ResetNodeCount()
```

##### `ResetNodeLocation` <a name="ResetNodeLocation" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetNodeLocation"></a>

```csharp
private void ResetNodeLocation()
```

##### `ResetSharedDeploymentPolicy` <a name="ResetSharedDeploymentPolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetSharedDeploymentPolicy"></a>

```csharp
private void ResetSharedDeploymentPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilterInput">MachineFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocationInput">NodeLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicyInput">SharedDeploymentPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilter">MachineFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocation">NodeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicy">SharedDeploymentPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal">EdgecontainerClusterControlPlaneLocal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MachineFilterInput`<sup>Optional</sup> <a name="MachineFilterInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilterInput"></a>

```csharp
public string MachineFilterInput { get; }
```

- *Type:* string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCountInput"></a>

```csharp
public double NodeCountInput { get; }
```

- *Type:* double

---

##### `NodeLocationInput`<sup>Optional</sup> <a name="NodeLocationInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocationInput"></a>

```csharp
public string NodeLocationInput { get; }
```

- *Type:* string

---

##### `SharedDeploymentPolicyInput`<sup>Optional</sup> <a name="SharedDeploymentPolicyInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicyInput"></a>

```csharp
public string SharedDeploymentPolicyInput { get; }
```

- *Type:* string

---

##### `MachineFilter`<sup>Required</sup> <a name="MachineFilter" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilter"></a>

```csharp
public string MachineFilter { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `NodeLocation`<sup>Required</sup> <a name="NodeLocation" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocation"></a>

```csharp
public string NodeLocation { get; }
```

- *Type:* string

---

##### `SharedDeploymentPolicy`<sup>Required</sup> <a name="SharedDeploymentPolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicy"></a>

```csharp
public string SharedDeploymentPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerClusterControlPlaneLocal InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal">EdgecontainerClusterControlPlaneLocal</a>

---


### EdgecontainerClusterControlPlaneOutputReference <a name="EdgecontainerClusterControlPlaneOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterControlPlaneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.putLocal">PutLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.putRemote">PutRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.resetRemote">ResetRemote</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocal` <a name="PutLocal" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.putLocal"></a>

```csharp
private void PutLocal(EdgecontainerClusterControlPlaneLocal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.putLocal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal">EdgecontainerClusterControlPlaneLocal</a>

---

##### `PutRemote` <a name="PutRemote" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.putRemote"></a>

```csharp
private void PutRemote(EdgecontainerClusterControlPlaneRemote Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.putRemote.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote">EdgecontainerClusterControlPlaneRemote</a>

---

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.resetLocal"></a>

```csharp
private void ResetLocal()
```

##### `ResetRemote` <a name="ResetRemote" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.resetRemote"></a>

```csharp
private void ResetRemote()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.local">Local</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference">EdgecontainerClusterControlPlaneLocalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.remote">Remote</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference">EdgecontainerClusterControlPlaneRemoteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.localInput">LocalInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal">EdgecontainerClusterControlPlaneLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.remoteInput">RemoteInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote">EdgecontainerClusterControlPlaneRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.local"></a>

```csharp
public EdgecontainerClusterControlPlaneLocalOutputReference Local { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference">EdgecontainerClusterControlPlaneLocalOutputReference</a>

---

##### `Remote`<sup>Required</sup> <a name="Remote" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.remote"></a>

```csharp
public EdgecontainerClusterControlPlaneRemoteOutputReference Remote { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference">EdgecontainerClusterControlPlaneRemoteOutputReference</a>

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.localInput"></a>

```csharp
public EdgecontainerClusterControlPlaneLocal LocalInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal">EdgecontainerClusterControlPlaneLocal</a>

---

##### `RemoteInput`<sup>Optional</sup> <a name="RemoteInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.remoteInput"></a>

```csharp
public EdgecontainerClusterControlPlaneRemote RemoteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote">EdgecontainerClusterControlPlaneRemote</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerClusterControlPlane InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a>

---


### EdgecontainerClusterControlPlaneRemoteOutputReference <a name="EdgecontainerClusterControlPlaneRemoteOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterControlPlaneRemoteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.resetNodeLocation">ResetNodeLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNodeLocation` <a name="ResetNodeLocation" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.resetNodeLocation"></a>

```csharp
private void ResetNodeLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocationInput">NodeLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocation">NodeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote">EdgecontainerClusterControlPlaneRemote</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeLocationInput`<sup>Optional</sup> <a name="NodeLocationInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocationInput"></a>

```csharp
public string NodeLocationInput { get; }
```

- *Type:* string

---

##### `NodeLocation`<sup>Required</sup> <a name="NodeLocation" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocation"></a>

```csharp
public string NodeLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerClusterControlPlaneRemote InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote">EdgecontainerClusterControlPlaneRemote</a>

---


### EdgecontainerClusterFleetOutputReference <a name="EdgecontainerClusterFleetOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterFleetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.membership">Membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.membership"></a>

```csharp
public string Membership { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerClusterFleet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a>

---


### EdgecontainerClusterMaintenanceEventsList <a name="EdgecontainerClusterMaintenanceEventsList" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterMaintenanceEventsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.get"></a>

```csharp
private EdgecontainerClusterMaintenanceEventsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### EdgecontainerClusterMaintenanceEventsOutputReference <a name="EdgecontainerClusterMaintenanceEventsOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterMaintenanceEventsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.targetVersion">TargetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEvents">EdgecontainerClusterMaintenanceEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TargetVersion`<sup>Required</sup> <a name="TargetVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.targetVersion"></a>

```csharp
public string TargetVersion { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerClusterMaintenanceEvents InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEvents">EdgecontainerClusterMaintenanceEvents</a>

---


### EdgecontainerClusterMaintenancePolicyOutputReference <a name="EdgecontainerClusterMaintenancePolicyOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterMaintenancePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.putWindow">PutWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWindow` <a name="PutWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.putWindow"></a>

```csharp
private void PutWindow(EdgecontainerClusterMaintenancePolicyWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.putWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow">EdgecontainerClusterMaintenancePolicyWindow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.window">Window</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference">EdgecontainerClusterMaintenancePolicyWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.windowInput">WindowInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow">EdgecontainerClusterMaintenancePolicyWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.window"></a>

```csharp
public EdgecontainerClusterMaintenancePolicyWindowOutputReference Window { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference">EdgecontainerClusterMaintenancePolicyWindowOutputReference</a>

---

##### `WindowInput`<sup>Optional</sup> <a name="WindowInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.windowInput"></a>

```csharp
public EdgecontainerClusterMaintenancePolicyWindow WindowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow">EdgecontainerClusterMaintenancePolicyWindow</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerClusterMaintenancePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a>

---


### EdgecontainerClusterMaintenancePolicyWindowOutputReference <a name="EdgecontainerClusterMaintenancePolicyWindowOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterMaintenancePolicyWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.putRecurringWindow">PutRecurringWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecurringWindow` <a name="PutRecurringWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.putRecurringWindow"></a>

```csharp
private void PutRecurringWindow(EdgecontainerClusterMaintenancePolicyWindowRecurringWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.putRecurringWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindow">RecurringWindow</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindowInput">RecurringWindowInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow">EdgecontainerClusterMaintenancePolicyWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecurringWindow`<sup>Required</sup> <a name="RecurringWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindow"></a>

```csharp
public EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference RecurringWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference</a>

---

##### `RecurringWindowInput`<sup>Optional</sup> <a name="RecurringWindowInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindowInput"></a>

```csharp
public EdgecontainerClusterMaintenancePolicyWindowRecurringWindow RecurringWindowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerClusterMaintenancePolicyWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow">EdgecontainerClusterMaintenancePolicyWindow</a>

---


### EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference <a name="EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.putWindow">PutWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetRecurrence">ResetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetWindow">ResetWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWindow` <a name="PutWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.putWindow"></a>

```csharp
private void PutWindow(EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.putWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

---

##### `ResetRecurrence` <a name="ResetRecurrence" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetRecurrence"></a>

```csharp
private void ResetRecurrence()
```

##### `ResetWindow` <a name="ResetWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetWindow"></a>

```csharp
private void ResetWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.window">Window</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrenceInput">RecurrenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.windowInput">WindowInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrence">Recurrence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.window"></a>

```csharp
public EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference Window { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference</a>

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrenceInput"></a>

```csharp
public string RecurrenceInput { get; }
```

- *Type:* string

---

##### `WindowInput`<sup>Optional</sup> <a name="WindowInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.windowInput"></a>

```csharp
public EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow WindowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrence"></a>

```csharp
public string Recurrence { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerClusterMaintenancePolicyWindowRecurringWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

---


### EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference <a name="EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

---


### EdgecontainerClusterNetworkingOutputReference <a name="EdgecontainerClusterNetworkingOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterNetworkingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.resetClusterIpv6CidrBlocks">ResetClusterIpv6CidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.resetServicesIpv6CidrBlocks">ResetServicesIpv6CidrBlocks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterIpv6CidrBlocks` <a name="ResetClusterIpv6CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.resetClusterIpv6CidrBlocks"></a>

```csharp
private void ResetClusterIpv6CidrBlocks()
```

##### `ResetServicesIpv6CidrBlocks` <a name="ResetServicesIpv6CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.resetServicesIpv6CidrBlocks"></a>

```csharp
private void ResetServicesIpv6CidrBlocks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocksInput">ClusterIpv4CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocksInput">ClusterIpv6CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocksInput">ServicesIpv4CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocksInput">ServicesIpv6CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocks">ClusterIpv4CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocks">ClusterIpv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocks">ServicesIpv4CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocks">ServicesIpv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `ClusterIpv4CidrBlocksInput`<sup>Optional</sup> <a name="ClusterIpv4CidrBlocksInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocksInput"></a>

```csharp
public string[] ClusterIpv4CidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `ClusterIpv6CidrBlocksInput`<sup>Optional</sup> <a name="ClusterIpv6CidrBlocksInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocksInput"></a>

```csharp
public string[] ClusterIpv6CidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `ServicesIpv4CidrBlocksInput`<sup>Optional</sup> <a name="ServicesIpv4CidrBlocksInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocksInput"></a>

```csharp
public string[] ServicesIpv4CidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `ServicesIpv6CidrBlocksInput`<sup>Optional</sup> <a name="ServicesIpv6CidrBlocksInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocksInput"></a>

```csharp
public string[] ServicesIpv6CidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `ClusterIpv4CidrBlocks`<sup>Required</sup> <a name="ClusterIpv4CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocks"></a>

```csharp
public string[] ClusterIpv4CidrBlocks { get; }
```

- *Type:* string[]

---

##### `ClusterIpv6CidrBlocks`<sup>Required</sup> <a name="ClusterIpv6CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocks"></a>

```csharp
public string[] ClusterIpv6CidrBlocks { get; }
```

- *Type:* string[]

---

##### `ServicesIpv4CidrBlocks`<sup>Required</sup> <a name="ServicesIpv4CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocks"></a>

```csharp
public string[] ServicesIpv4CidrBlocks { get; }
```

- *Type:* string[]

---

##### `ServicesIpv6CidrBlocks`<sup>Required</sup> <a name="ServicesIpv6CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocks"></a>

```csharp
public string[] ServicesIpv6CidrBlocks { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerClusterNetworking InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a>

---


### EdgecontainerClusterSystemAddonsConfigIngressOutputReference <a name="EdgecontainerClusterSystemAddonsConfigIngressOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterSystemAddonsConfigIngressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetIpv4Vip">ResetIpv4Vip</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetIpv4Vip` <a name="ResetIpv4Vip" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetIpv4Vip"></a>

```csharp
private void ResetIpv4Vip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4VipInput">Ipv4VipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4Vip">Ipv4Vip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress">EdgecontainerClusterSystemAddonsConfigIngress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `Ipv4VipInput`<sup>Optional</sup> <a name="Ipv4VipInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4VipInput"></a>

```csharp
public string Ipv4VipInput { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `Ipv4Vip`<sup>Required</sup> <a name="Ipv4Vip" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4Vip"></a>

```csharp
public string Ipv4Vip { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerClusterSystemAddonsConfigIngress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress">EdgecontainerClusterSystemAddonsConfigIngress</a>

---


### EdgecontainerClusterSystemAddonsConfigOutputReference <a name="EdgecontainerClusterSystemAddonsConfigOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterSystemAddonsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.putIngress">PutIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.resetIngress">ResetIngress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIngress` <a name="PutIngress" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.putIngress"></a>

```csharp
private void PutIngress(EdgecontainerClusterSystemAddonsConfigIngress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.putIngress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress">EdgecontainerClusterSystemAddonsConfigIngress</a>

---

##### `ResetIngress` <a name="ResetIngress" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.resetIngress"></a>

```csharp
private void ResetIngress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.ingress">Ingress</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference">EdgecontainerClusterSystemAddonsConfigIngressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.ingressInput">IngressInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress">EdgecontainerClusterSystemAddonsConfigIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ingress`<sup>Required</sup> <a name="Ingress" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.ingress"></a>

```csharp
public EdgecontainerClusterSystemAddonsConfigIngressOutputReference Ingress { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference">EdgecontainerClusterSystemAddonsConfigIngressOutputReference</a>

---

##### `IngressInput`<sup>Optional</sup> <a name="IngressInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.ingressInput"></a>

```csharp
public EdgecontainerClusterSystemAddonsConfigIngress IngressInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress">EdgecontainerClusterSystemAddonsConfigIngress</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.internalValue"></a>

```csharp
public EdgecontainerClusterSystemAddonsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a>

---


### EdgecontainerClusterTimeoutsOutputReference <a name="EdgecontainerClusterTimeoutsOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EdgecontainerClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



