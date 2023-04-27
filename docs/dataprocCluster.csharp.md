# `google_dataproc_cluster`

Refer to the Terraform Registory for docs: [`google_dataproc_cluster`](https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster).

# `dataprocCluster` Submodule <a name="`dataprocCluster` Submodule" id="@cdktf/provider-google.dataprocCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocCluster <a name="DataprocCluster" id="@cdktf/provider-google.dataprocCluster.DataprocCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster google_dataproc_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocCluster(Construct Scope, string Id, DataprocClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig">DataprocClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig">DataprocClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.putClusterConfig">PutClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.putVirtualClusterConfig">PutVirtualClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.resetClusterConfig">ResetClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.resetGracefulDecommissionTimeout">ResetGracefulDecommissionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.resetVirtualClusterConfig">ResetVirtualClusterConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutClusterConfig` <a name="PutClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.putClusterConfig"></a>

```csharp
private void PutClusterConfig(DataprocClusterClusterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.putClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig">DataprocClusterClusterConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(DataprocClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts">DataprocClusterTimeouts</a>

---

##### `PutVirtualClusterConfig` <a name="PutVirtualClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.putVirtualClusterConfig"></a>

```csharp
private void PutVirtualClusterConfig(DataprocClusterVirtualClusterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.putVirtualClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig">DataprocClusterVirtualClusterConfig</a>

---

##### `ResetClusterConfig` <a name="ResetClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.resetClusterConfig"></a>

```csharp
private void ResetClusterConfig()
```

##### `ResetGracefulDecommissionTimeout` <a name="ResetGracefulDecommissionTimeout" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.resetGracefulDecommissionTimeout"></a>

```csharp
private void ResetGracefulDecommissionTimeout()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVirtualClusterConfig` <a name="ResetVirtualClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.resetVirtualClusterConfig"></a>

```csharp
private void ResetVirtualClusterConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference">DataprocClusterClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference">DataprocClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.virtualClusterConfig">VirtualClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference">DataprocClusterVirtualClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.clusterConfigInput">ClusterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig">DataprocClusterClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.gracefulDecommissionTimeoutInput">GracefulDecommissionTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.virtualClusterConfigInput">VirtualClusterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig">DataprocClusterVirtualClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.gracefulDecommissionTimeout">GracefulDecommissionTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.clusterConfig"></a>

```csharp
public DataprocClusterClusterConfigOutputReference ClusterConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference">DataprocClusterClusterConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.timeouts"></a>

```csharp
public DataprocClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference">DataprocClusterTimeoutsOutputReference</a>

---

##### `VirtualClusterConfig`<sup>Required</sup> <a name="VirtualClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.virtualClusterConfig"></a>

```csharp
public DataprocClusterVirtualClusterConfigOutputReference VirtualClusterConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference">DataprocClusterVirtualClusterConfigOutputReference</a>

---

##### `ClusterConfigInput`<sup>Optional</sup> <a name="ClusterConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.clusterConfigInput"></a>

```csharp
public DataprocClusterClusterConfig ClusterConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig">DataprocClusterClusterConfig</a>

---

##### `GracefulDecommissionTimeoutInput`<sup>Optional</sup> <a name="GracefulDecommissionTimeoutInput" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.gracefulDecommissionTimeoutInput"></a>

```csharp
public string GracefulDecommissionTimeoutInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualClusterConfigInput`<sup>Optional</sup> <a name="VirtualClusterConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.virtualClusterConfigInput"></a>

```csharp
public DataprocClusterVirtualClusterConfig VirtualClusterConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig">DataprocClusterVirtualClusterConfig</a>

---

##### `GracefulDecommissionTimeout`<sup>Required</sup> <a name="GracefulDecommissionTimeout" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.gracefulDecommissionTimeout"></a>

```csharp
public string GracefulDecommissionTimeout { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocClusterClusterConfig <a name="DataprocClusterClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfig {
    DataprocClusterClusterConfigAutoscalingConfig AutoscalingConfig = null,
    DataprocClusterClusterConfigDataprocMetricConfig DataprocMetricConfig = null,
    DataprocClusterClusterConfigEncryptionConfig EncryptionConfig = null,
    DataprocClusterClusterConfigEndpointConfig EndpointConfig = null,
    DataprocClusterClusterConfigGceClusterConfig GceClusterConfig = null,
    object InitializationAction = null,
    DataprocClusterClusterConfigLifecycleConfig LifecycleConfig = null,
    DataprocClusterClusterConfigMasterConfig MasterConfig = null,
    DataprocClusterClusterConfigMetastoreConfig MetastoreConfig = null,
    DataprocClusterClusterConfigPreemptibleWorkerConfig PreemptibleWorkerConfig = null,
    DataprocClusterClusterConfigSecurityConfig SecurityConfig = null,
    DataprocClusterClusterConfigSoftwareConfig SoftwareConfig = null,
    string StagingBucket = null,
    string TempBucket = null,
    DataprocClusterClusterConfigWorkerConfig WorkerConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.autoscalingConfig">AutoscalingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig">DataprocClusterClusterConfigAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.dataprocMetricConfig">DataprocMetricConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig">DataprocClusterClusterConfigDataprocMetricConfig</a></code> | dataproc_metric_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig">DataprocClusterClusterConfigEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.endpointConfig">EndpointConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig">DataprocClusterClusterConfigEndpointConfig</a></code> | endpoint_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.gceClusterConfig">GceClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig">DataprocClusterClusterConfigGceClusterConfig</a></code> | gce_cluster_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.initializationAction">InitializationAction</a></code> | <code>object</code> | initialization_action block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.lifecycleConfig">LifecycleConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig">DataprocClusterClusterConfigLifecycleConfig</a></code> | lifecycle_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.masterConfig">MasterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig">DataprocClusterClusterConfigMasterConfig</a></code> | master_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.metastoreConfig">MetastoreConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig">DataprocClusterClusterConfigMetastoreConfig</a></code> | metastore_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.preemptibleWorkerConfig">PreemptibleWorkerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig">DataprocClusterClusterConfigPreemptibleWorkerConfig</a></code> | preemptible_worker_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.securityConfig">SecurityConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig">DataprocClusterClusterConfigSecurityConfig</a></code> | security_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.softwareConfig">SoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig">DataprocClusterClusterConfigSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.stagingBucket">StagingBucket</a></code> | <code>string</code> | The Cloud Storage staging bucket used to stage files, such as Hadoop jars, between client machines and the cluster. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.tempBucket">TempBucket</a></code> | <code>string</code> | The Cloud Storage temp bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.workerConfig">WorkerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig">DataprocClusterClusterConfigWorkerConfig</a></code> | worker_config block. |

---

##### `AutoscalingConfig`<sup>Optional</sup> <a name="AutoscalingConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.autoscalingConfig"></a>

```csharp
public DataprocClusterClusterConfigAutoscalingConfig AutoscalingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig">DataprocClusterClusterConfigAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#autoscaling_config DataprocCluster#autoscaling_config}

---

##### `DataprocMetricConfig`<sup>Optional</sup> <a name="DataprocMetricConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.dataprocMetricConfig"></a>

```csharp
public DataprocClusterClusterConfigDataprocMetricConfig DataprocMetricConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig">DataprocClusterClusterConfigDataprocMetricConfig</a>

dataproc_metric_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#dataproc_metric_config DataprocCluster#dataproc_metric_config}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.encryptionConfig"></a>

```csharp
public DataprocClusterClusterConfigEncryptionConfig EncryptionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig">DataprocClusterClusterConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#encryption_config DataprocCluster#encryption_config}

---

##### `EndpointConfig`<sup>Optional</sup> <a name="EndpointConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.endpointConfig"></a>

```csharp
public DataprocClusterClusterConfigEndpointConfig EndpointConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig">DataprocClusterClusterConfigEndpointConfig</a>

endpoint_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#endpoint_config DataprocCluster#endpoint_config}

---

##### `GceClusterConfig`<sup>Optional</sup> <a name="GceClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.gceClusterConfig"></a>

```csharp
public DataprocClusterClusterConfigGceClusterConfig GceClusterConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig">DataprocClusterClusterConfigGceClusterConfig</a>

gce_cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#gce_cluster_config DataprocCluster#gce_cluster_config}

---

##### `InitializationAction`<sup>Optional</sup> <a name="InitializationAction" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.initializationAction"></a>

```csharp
public object InitializationAction { get; set; }
```

- *Type:* object

initialization_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#initialization_action DataprocCluster#initialization_action}

---

##### `LifecycleConfig`<sup>Optional</sup> <a name="LifecycleConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.lifecycleConfig"></a>

```csharp
public DataprocClusterClusterConfigLifecycleConfig LifecycleConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig">DataprocClusterClusterConfigLifecycleConfig</a>

lifecycle_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#lifecycle_config DataprocCluster#lifecycle_config}

---

##### `MasterConfig`<sup>Optional</sup> <a name="MasterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.masterConfig"></a>

```csharp
public DataprocClusterClusterConfigMasterConfig MasterConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig">DataprocClusterClusterConfigMasterConfig</a>

master_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#master_config DataprocCluster#master_config}

---

##### `MetastoreConfig`<sup>Optional</sup> <a name="MetastoreConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.metastoreConfig"></a>

```csharp
public DataprocClusterClusterConfigMetastoreConfig MetastoreConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig">DataprocClusterClusterConfigMetastoreConfig</a>

metastore_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#metastore_config DataprocCluster#metastore_config}

---

##### `PreemptibleWorkerConfig`<sup>Optional</sup> <a name="PreemptibleWorkerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.preemptibleWorkerConfig"></a>

```csharp
public DataprocClusterClusterConfigPreemptibleWorkerConfig PreemptibleWorkerConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig">DataprocClusterClusterConfigPreemptibleWorkerConfig</a>

preemptible_worker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#preemptible_worker_config DataprocCluster#preemptible_worker_config}

---

##### `SecurityConfig`<sup>Optional</sup> <a name="SecurityConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.securityConfig"></a>

```csharp
public DataprocClusterClusterConfigSecurityConfig SecurityConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig">DataprocClusterClusterConfigSecurityConfig</a>

security_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#security_config DataprocCluster#security_config}

---

##### `SoftwareConfig`<sup>Optional</sup> <a name="SoftwareConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.softwareConfig"></a>

```csharp
public DataprocClusterClusterConfigSoftwareConfig SoftwareConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig">DataprocClusterClusterConfigSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#software_config DataprocCluster#software_config}

---

##### `StagingBucket`<sup>Optional</sup> <a name="StagingBucket" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.stagingBucket"></a>

```csharp
public string StagingBucket { get; set; }
```

- *Type:* string

The Cloud Storage staging bucket used to stage files, such as Hadoop jars, between client machines and the cluster.

Note: If you don't explicitly specify a staging_bucket then GCP will auto create / assign one for you. However, you are not guaranteed an auto generated bucket which is solely dedicated to your cluster; it may be shared with other clusters in the same region/zone also choosing to use the auto generation option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#staging_bucket DataprocCluster#staging_bucket}

---

##### `TempBucket`<sup>Optional</sup> <a name="TempBucket" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.tempBucket"></a>

```csharp
public string TempBucket { get; set; }
```

- *Type:* string

The Cloud Storage temp bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files.

Note: If you don't explicitly specify a temp_bucket then GCP will auto create / assign one for you.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#temp_bucket DataprocCluster#temp_bucket}

---

##### `WorkerConfig`<sup>Optional</sup> <a name="WorkerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.workerConfig"></a>

```csharp
public DataprocClusterClusterConfigWorkerConfig WorkerConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig">DataprocClusterClusterConfigWorkerConfig</a>

worker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#worker_config DataprocCluster#worker_config}

---

### DataprocClusterClusterConfigAutoscalingConfig <a name="DataprocClusterClusterConfigAutoscalingConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigAutoscalingConfig {
    string PolicyUri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig.property.policyUri">PolicyUri</a></code> | <code>string</code> | The autoscaling policy used by the cluster. |

---

##### `PolicyUri`<sup>Required</sup> <a name="PolicyUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig.property.policyUri"></a>

```csharp
public string PolicyUri { get; set; }
```

- *Type:* string

The autoscaling policy used by the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#policy_uri DataprocCluster#policy_uri}

---

### DataprocClusterClusterConfigDataprocMetricConfig <a name="DataprocClusterClusterConfigDataprocMetricConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigDataprocMetricConfig {
    object Metrics
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig.property.metrics">Metrics</a></code> | <code>object</code> | metrics block. |

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig.property.metrics"></a>

```csharp
public object Metrics { get; set; }
```

- *Type:* object

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#metrics DataprocCluster#metrics}

---

### DataprocClusterClusterConfigDataprocMetricConfigMetrics <a name="DataprocClusterClusterConfigDataprocMetricConfigMetrics" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigDataprocMetricConfigMetrics {
    string MetricSource,
    string[] MetricOverrides = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics.property.metricSource">MetricSource</a></code> | <code>string</code> | A source for the collection of Dataproc OSS metrics (see [available OSS metrics] (https://cloud.google.com//dataproc/docs/guides/monitoring#available_oss_metrics)). |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics.property.metricOverrides">MetricOverrides</a></code> | <code>string[]</code> | Specify one or more [available OSS metrics] (https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) to collect. |

---

##### `MetricSource`<sup>Required</sup> <a name="MetricSource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics.property.metricSource"></a>

```csharp
public string MetricSource { get; set; }
```

- *Type:* string

A source for the collection of Dataproc OSS metrics (see [available OSS metrics] (https://cloud.google.com//dataproc/docs/guides/monitoring#available_oss_metrics)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#metric_source DataprocCluster#metric_source}

---

##### `MetricOverrides`<sup>Optional</sup> <a name="MetricOverrides" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics.property.metricOverrides"></a>

```csharp
public string[] MetricOverrides { get; set; }
```

- *Type:* string[]

Specify one or more [available OSS metrics] (https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) to collect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#metric_overrides DataprocCluster#metric_overrides}

---

### DataprocClusterClusterConfigEncryptionConfig <a name="DataprocClusterClusterConfigEncryptionConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigEncryptionConfig {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The Cloud KMS key name to use for PD disk encryption for all instances in the cluster. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#kms_key_name DataprocCluster#kms_key_name}

---

### DataprocClusterClusterConfigEndpointConfig <a name="DataprocClusterClusterConfigEndpointConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigEndpointConfig {
    object EnableHttpPortAccess
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig.property.enableHttpPortAccess">EnableHttpPortAccess</a></code> | <code>object</code> | The flag to enable http access to specific ports on the cluster from external sources (aka Component Gateway). |

---

##### `EnableHttpPortAccess`<sup>Required</sup> <a name="EnableHttpPortAccess" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig.property.enableHttpPortAccess"></a>

```csharp
public object EnableHttpPortAccess { get; set; }
```

- *Type:* object

The flag to enable http access to specific ports on the cluster from external sources (aka Component Gateway).

Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#enable_http_port_access DataprocCluster#enable_http_port_access}

---

### DataprocClusterClusterConfigGceClusterConfig <a name="DataprocClusterClusterConfigGceClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigGceClusterConfig {
    object InternalIpOnly = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string Network = null,
    DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity NodeGroupAffinity = null,
    DataprocClusterClusterConfigGceClusterConfigReservationAffinity ReservationAffinity = null,
    string ServiceAccount = null,
    string[] ServiceAccountScopes = null,
    DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig ShieldedInstanceConfig = null,
    string Subnetwork = null,
    string[] Tags = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.internalIpOnly">InternalIpOnly</a></code> | <code>object</code> | By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of the Compute Engine metadata entries to add to all instances. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.network">Network</a></code> | <code>string</code> | The name or self_link of the Google Compute Engine network to the cluster will be part of. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.nodeGroupAffinity">NodeGroupAffinity</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity">DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity</a></code> | node_group_affinity block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity">DataprocClusterClusterConfigGceClusterConfigReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | The service account to be used by the Node VMs. If not specified, the "default" service account is used. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.serviceAccountScopes">ServiceAccountScopes</a></code> | <code>string[]</code> | The set of Google API scopes to be made available on all of the node VMs under the service_account specified. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig">DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.subnetwork">Subnetwork</a></code> | <code>string</code> | The name or self_link of the Google Compute Engine subnetwork the cluster will be part of. Conflicts with network. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.tags">Tags</a></code> | <code>string[]</code> | The list of instance tags applied to instances in the cluster. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.zone">Zone</a></code> | <code>string</code> | The GCP zone where your data is stored and used (i.e. where the master and the worker nodes will be created in). If region is set to 'global' (default) then zone is mandatory, otherwise GCP is able to make use of Auto Zone Placement to determine this automatically for you. Note: This setting additionally determines and restricts which computing resources are available for use with other configs such as cluster_config.master_config.machine_type and cluster_config.worker_config.machine_type. |

---

##### `InternalIpOnly`<sup>Optional</sup> <a name="InternalIpOnly" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.internalIpOnly"></a>

```csharp
public object InternalIpOnly { get; set; }
```

- *Type:* object

By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance.

If set to true, all instances in the cluster will only have internal IP addresses. Note: Private Google Access (also known as privateIpGoogleAccess) must be enabled on the subnetwork that the cluster will be launched in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#internal_ip_only DataprocCluster#internal_ip_only}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of the Compute Engine metadata entries to add to all instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#metadata DataprocCluster#metadata}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The name or self_link of the Google Compute Engine network to the cluster will be part of.

Conflicts with subnetwork. If neither is specified, this defaults to the "default" network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#network DataprocCluster#network}

---

##### `NodeGroupAffinity`<sup>Optional</sup> <a name="NodeGroupAffinity" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.nodeGroupAffinity"></a>

```csharp
public DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity NodeGroupAffinity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity">DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity</a>

node_group_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#node_group_affinity DataprocCluster#node_group_affinity}

---

##### `ReservationAffinity`<sup>Optional</sup> <a name="ReservationAffinity" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.reservationAffinity"></a>

```csharp
public DataprocClusterClusterConfigGceClusterConfigReservationAffinity ReservationAffinity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity">DataprocClusterClusterConfigGceClusterConfigReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#reservation_affinity DataprocCluster#reservation_affinity}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

The service account to be used by the Node VMs. If not specified, the "default" service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#service_account DataprocCluster#service_account}

---

##### `ServiceAccountScopes`<sup>Optional</sup> <a name="ServiceAccountScopes" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.serviceAccountScopes"></a>

```csharp
public string[] ServiceAccountScopes { get; set; }
```

- *Type:* string[]

The set of Google API scopes to be made available on all of the node VMs under the service_account specified.

These can be either FQDNs, or scope aliases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#service_account_scopes DataprocCluster#service_account_scopes}

---

##### `ShieldedInstanceConfig`<sup>Optional</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.shieldedInstanceConfig"></a>

```csharp
public DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig ShieldedInstanceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig">DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#shielded_instance_config DataprocCluster#shielded_instance_config}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.subnetwork"></a>

```csharp
public string Subnetwork { get; set; }
```

- *Type:* string

The name or self_link of the Google Compute Engine subnetwork the cluster will be part of. Conflicts with network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#subnetwork DataprocCluster#subnetwork}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

The list of instance tags applied to instances in the cluster.

Tags are used to identify valid sources or targets for network firewalls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#tags DataprocCluster#tags}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The GCP zone where your data is stored and used (i.e. where the master and the worker nodes will be created in). If region is set to 'global' (default) then zone is mandatory, otherwise GCP is able to make use of Auto Zone Placement to determine this automatically for you. Note: This setting additionally determines and restricts which computing resources are available for use with other configs such as cluster_config.master_config.machine_type and cluster_config.worker_config.machine_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#zone DataprocCluster#zone}

---

### DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity <a name="DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity {
    string NodeGroupUri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity.property.nodeGroupUri">NodeGroupUri</a></code> | <code>string</code> | The URI of a sole-tenant that the cluster will be created on. |

---

##### `NodeGroupUri`<sup>Required</sup> <a name="NodeGroupUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity.property.nodeGroupUri"></a>

```csharp
public string NodeGroupUri { get; set; }
```

- *Type:* string

The URI of a sole-tenant that the cluster will be created on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#node_group_uri DataprocCluster#node_group_uri}

---

### DataprocClusterClusterConfigGceClusterConfigReservationAffinity <a name="DataprocClusterClusterConfigGceClusterConfigReservationAffinity" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigGceClusterConfigReservationAffinity {
    string ConsumeReservationType = null,
    string Key = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity.property.consumeReservationType">ConsumeReservationType</a></code> | <code>string</code> | Type of reservation to consume. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity.property.key">Key</a></code> | <code>string</code> | Corresponds to the label key of reservation resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity.property.values">Values</a></code> | <code>string[]</code> | Corresponds to the label values of reservation resource. |

---

##### `ConsumeReservationType`<sup>Optional</sup> <a name="ConsumeReservationType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity.property.consumeReservationType"></a>

```csharp
public string ConsumeReservationType { get; set; }
```

- *Type:* string

Type of reservation to consume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#consume_reservation_type DataprocCluster#consume_reservation_type}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Corresponds to the label key of reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#key DataprocCluster#key}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Corresponds to the label values of reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#values DataprocCluster#values}

---

### DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig <a name="DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig {
    object EnableIntegrityMonitoring = null,
    object EnableSecureBoot = null,
    object EnableVtpm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>object</code> | Defines whether instances have integrity monitoring enabled. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | Defines whether instances have Secure Boot enabled. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig.property.enableVtpm">EnableVtpm</a></code> | <code>object</code> | Defines whether instances have the vTPM enabled. |

---

##### `EnableIntegrityMonitoring`<sup>Optional</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```csharp
public object EnableIntegrityMonitoring { get; set; }
```

- *Type:* object

Defines whether instances have integrity monitoring enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#enable_integrity_monitoring DataprocCluster#enable_integrity_monitoring}

---

##### `EnableSecureBoot`<sup>Optional</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; set; }
```

- *Type:* object

Defines whether instances have Secure Boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#enable_secure_boot DataprocCluster#enable_secure_boot}

---

##### `EnableVtpm`<sup>Optional</sup> <a name="EnableVtpm" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig.property.enableVtpm"></a>

```csharp
public object EnableVtpm { get; set; }
```

- *Type:* object

Defines whether instances have the vTPM enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#enable_vtpm DataprocCluster#enable_vtpm}

---

### DataprocClusterClusterConfigInitializationAction <a name="DataprocClusterClusterConfigInitializationAction" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigInitializationAction {
    string Script,
    double TimeoutSec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationAction.property.script">Script</a></code> | <code>string</code> | The script to be executed during initialization of the cluster. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationAction.property.timeoutSec">TimeoutSec</a></code> | <code>double</code> | The maximum duration (in seconds) which script is allowed to take to execute its action. |

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationAction.property.script"></a>

```csharp
public string Script { get; set; }
```

- *Type:* string

The script to be executed during initialization of the cluster.

The script must be a GCS file with a gs:// prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#script DataprocCluster#script}

---

##### `TimeoutSec`<sup>Optional</sup> <a name="TimeoutSec" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationAction.property.timeoutSec"></a>

```csharp
public double TimeoutSec { get; set; }
```

- *Type:* double

The maximum duration (in seconds) which script is allowed to take to execute its action.

GCP will default to a predetermined computed value if not set (currently 300).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#timeout_sec DataprocCluster#timeout_sec}

---

### DataprocClusterClusterConfigLifecycleConfig <a name="DataprocClusterClusterConfigLifecycleConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigLifecycleConfig {
    string AutoDeleteTime = null,
    string IdleDeleteTtl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig.property.autoDeleteTime">AutoDeleteTime</a></code> | <code>string</code> | The time when cluster will be auto-deleted. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig.property.idleDeleteTtl">IdleDeleteTtl</a></code> | <code>string</code> | The duration to keep the cluster alive while idling (no jobs running). |

---

##### `AutoDeleteTime`<sup>Optional</sup> <a name="AutoDeleteTime" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig.property.autoDeleteTime"></a>

```csharp
public string AutoDeleteTime { get; set; }
```

- *Type:* string

The time when cluster will be auto-deleted. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#auto_delete_time DataprocCluster#auto_delete_time}

---

##### `IdleDeleteTtl`<sup>Optional</sup> <a name="IdleDeleteTtl" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig.property.idleDeleteTtl"></a>

```csharp
public string IdleDeleteTtl { get; set; }
```

- *Type:* string

The duration to keep the cluster alive while idling (no jobs running).

After this TTL, the cluster will be deleted. Valid range: [10m, 14d].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#idle_delete_ttl DataprocCluster#idle_delete_ttl}

---

### DataprocClusterClusterConfigMasterConfig <a name="DataprocClusterClusterConfigMasterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigMasterConfig {
    object Accelerators = null,
    DataprocClusterClusterConfigMasterConfigDiskConfig DiskConfig = null,
    string ImageUri = null,
    string MachineType = null,
    string MinCpuPlatform = null,
    double NumInstances = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.accelerators">Accelerators</a></code> | <code>object</code> | accelerators block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.diskConfig">DiskConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig">DataprocClusterClusterConfigMasterConfigDiskConfig</a></code> | disk_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.imageUri">ImageUri</a></code> | <code>string</code> | The URI for the image to use for this master/worker. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.machineType">MachineType</a></code> | <code>string</code> | The name of a Google Compute Engine machine type to create for the master/worker. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>string</code> | The name of a minimum generation of CPU family for the master/worker. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.numInstances">NumInstances</a></code> | <code>double</code> | Specifies the number of master/worker nodes to create. If not specified, GCP will default to a predetermined computed value. |

---

##### `Accelerators`<sup>Optional</sup> <a name="Accelerators" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.accelerators"></a>

```csharp
public object Accelerators { get; set; }
```

- *Type:* object

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#accelerators DataprocCluster#accelerators}

---

##### `DiskConfig`<sup>Optional</sup> <a name="DiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.diskConfig"></a>

```csharp
public DataprocClusterClusterConfigMasterConfigDiskConfig DiskConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig">DataprocClusterClusterConfigMasterConfigDiskConfig</a>

disk_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#disk_config DataprocCluster#disk_config}

---

##### `ImageUri`<sup>Optional</sup> <a name="ImageUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.imageUri"></a>

```csharp
public string ImageUri { get; set; }
```

- *Type:* string

The URI for the image to use for this master/worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#image_uri DataprocCluster#image_uri}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The name of a Google Compute Engine machine type to create for the master/worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#machine_type DataprocCluster#machine_type}

---

##### `MinCpuPlatform`<sup>Optional</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.minCpuPlatform"></a>

```csharp
public string MinCpuPlatform { get; set; }
```

- *Type:* string

The name of a minimum generation of CPU family for the master/worker.

If not specified, GCP will default to a predetermined computed value for each zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#min_cpu_platform DataprocCluster#min_cpu_platform}

---

##### `NumInstances`<sup>Optional</sup> <a name="NumInstances" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.numInstances"></a>

```csharp
public double NumInstances { get; set; }
```

- *Type:* double

Specifies the number of master/worker nodes to create. If not specified, GCP will default to a predetermined computed value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#num_instances DataprocCluster#num_instances}

---

### DataprocClusterClusterConfigMasterConfigAccelerators <a name="DataprocClusterClusterConfigMasterConfigAccelerators" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAccelerators.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigMasterConfigAccelerators {
    double AcceleratorCount,
    string AcceleratorType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAccelerators.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | The number of the accelerator cards of this type exposed to this instance. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAccelerators.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | The short name of the accelerator type to expose to this instance. For example, nvidia-tesla-k80. |

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAccelerators.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; set; }
```

- *Type:* double

The number of the accelerator cards of this type exposed to this instance.

Often restricted to one of 1, 2, 4, or 8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#accelerator_count DataprocCluster#accelerator_count}

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAccelerators.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; set; }
```

- *Type:* string

The short name of the accelerator type to expose to this instance. For example, nvidia-tesla-k80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#accelerator_type DataprocCluster#accelerator_type}

---

### DataprocClusterClusterConfigMasterConfigDiskConfig <a name="DataprocClusterClusterConfigMasterConfigDiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigMasterConfigDiskConfig {
    double BootDiskSizeGb = null,
    string BootDiskType = null,
    double NumLocalSsds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | Size of the primary disk attached to each node, specified in GB. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig.property.bootDiskType">BootDiskType</a></code> | <code>string</code> | The disk type of the primary disk attached to each node. Such as "pd-ssd" or "pd-standard". Defaults to "pd-standard". |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig.property.numLocalSsds">NumLocalSsds</a></code> | <code>double</code> | The amount of local SSD disks that will be attached to each master cluster node. Defaults to 0. |

---

##### `BootDiskSizeGb`<sup>Optional</sup> <a name="BootDiskSizeGb" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; set; }
```

- *Type:* double

Size of the primary disk attached to each node, specified in GB.

The primary disk contains the boot volume and system libraries, and the smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#boot_disk_size_gb DataprocCluster#boot_disk_size_gb}

---

##### `BootDiskType`<sup>Optional</sup> <a name="BootDiskType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig.property.bootDiskType"></a>

```csharp
public string BootDiskType { get; set; }
```

- *Type:* string

The disk type of the primary disk attached to each node. Such as "pd-ssd" or "pd-standard". Defaults to "pd-standard".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#boot_disk_type DataprocCluster#boot_disk_type}

---

##### `NumLocalSsds`<sup>Optional</sup> <a name="NumLocalSsds" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig.property.numLocalSsds"></a>

```csharp
public double NumLocalSsds { get; set; }
```

- *Type:* double

The amount of local SSD disks that will be attached to each master cluster node. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#num_local_ssds DataprocCluster#num_local_ssds}

---

### DataprocClusterClusterConfigMetastoreConfig <a name="DataprocClusterClusterConfigMetastoreConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigMetastoreConfig {
    string DataprocMetastoreService
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig.property.dataprocMetastoreService">DataprocMetastoreService</a></code> | <code>string</code> | Resource name of an existing Dataproc Metastore service. |

---

##### `DataprocMetastoreService`<sup>Required</sup> <a name="DataprocMetastoreService" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig.property.dataprocMetastoreService"></a>

```csharp
public string DataprocMetastoreService { get; set; }
```

- *Type:* string

Resource name of an existing Dataproc Metastore service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#dataproc_metastore_service DataprocCluster#dataproc_metastore_service}

---

### DataprocClusterClusterConfigPreemptibleWorkerConfig <a name="DataprocClusterClusterConfigPreemptibleWorkerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigPreemptibleWorkerConfig {
    DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig DiskConfig = null,
    double NumInstances = null,
    string Preemptibility = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig.property.diskConfig">DiskConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig">DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig</a></code> | disk_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig.property.numInstances">NumInstances</a></code> | <code>double</code> | Specifies the number of preemptible nodes to create. Defaults to 0. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig.property.preemptibility">Preemptibility</a></code> | <code>string</code> | Specifies the preemptibility of the secondary nodes. Defaults to PREEMPTIBLE. |

---

##### `DiskConfig`<sup>Optional</sup> <a name="DiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig.property.diskConfig"></a>

```csharp
public DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig DiskConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig">DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig</a>

disk_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#disk_config DataprocCluster#disk_config}

---

##### `NumInstances`<sup>Optional</sup> <a name="NumInstances" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig.property.numInstances"></a>

```csharp
public double NumInstances { get; set; }
```

- *Type:* double

Specifies the number of preemptible nodes to create. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#num_instances DataprocCluster#num_instances}

---

##### `Preemptibility`<sup>Optional</sup> <a name="Preemptibility" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig.property.preemptibility"></a>

```csharp
public string Preemptibility { get; set; }
```

- *Type:* string

Specifies the preemptibility of the secondary nodes. Defaults to PREEMPTIBLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#preemptibility DataprocCluster#preemptibility}

---

### DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig <a name="DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig {
    double BootDiskSizeGb = null,
    string BootDiskType = null,
    double NumLocalSsds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | Size of the primary disk attached to each preemptible worker node, specified in GB. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig.property.bootDiskType">BootDiskType</a></code> | <code>string</code> | The disk type of the primary disk attached to each preemptible worker node. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig.property.numLocalSsds">NumLocalSsds</a></code> | <code>double</code> | The amount of local SSD disks that will be attached to each preemptible worker node. Defaults to 0. |

---

##### `BootDiskSizeGb`<sup>Optional</sup> <a name="BootDiskSizeGb" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; set; }
```

- *Type:* double

Size of the primary disk attached to each preemptible worker node, specified in GB.

The smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#boot_disk_size_gb DataprocCluster#boot_disk_size_gb}

---

##### `BootDiskType`<sup>Optional</sup> <a name="BootDiskType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig.property.bootDiskType"></a>

```csharp
public string BootDiskType { get; set; }
```

- *Type:* string

The disk type of the primary disk attached to each preemptible worker node.

Such as "pd-ssd" or "pd-standard". Defaults to "pd-standard".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#boot_disk_type DataprocCluster#boot_disk_type}

---

##### `NumLocalSsds`<sup>Optional</sup> <a name="NumLocalSsds" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig.property.numLocalSsds"></a>

```csharp
public double NumLocalSsds { get; set; }
```

- *Type:* double

The amount of local SSD disks that will be attached to each preemptible worker node. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#num_local_ssds DataprocCluster#num_local_ssds}

---

### DataprocClusterClusterConfigSecurityConfig <a name="DataprocClusterClusterConfigSecurityConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigSecurityConfig {
    DataprocClusterClusterConfigSecurityConfigKerberosConfig KerberosConfig
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig.property.kerberosConfig">KerberosConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig">DataprocClusterClusterConfigSecurityConfigKerberosConfig</a></code> | kerberos_config block. |

---

##### `KerberosConfig`<sup>Required</sup> <a name="KerberosConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig.property.kerberosConfig"></a>

```csharp
public DataprocClusterClusterConfigSecurityConfigKerberosConfig KerberosConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig">DataprocClusterClusterConfigSecurityConfigKerberosConfig</a>

kerberos_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#kerberos_config DataprocCluster#kerberos_config}

---

### DataprocClusterClusterConfigSecurityConfigKerberosConfig <a name="DataprocClusterClusterConfigSecurityConfigKerberosConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigSecurityConfigKerberosConfig {
    string KmsKeyUri,
    string RootPrincipalPasswordUri,
    string CrossRealmTrustAdminServer = null,
    string CrossRealmTrustKdc = null,
    string CrossRealmTrustRealm = null,
    string CrossRealmTrustSharedPasswordUri = null,
    object EnableKerberos = null,
    string KdcDbKeyUri = null,
    string KeyPasswordUri = null,
    string KeystorePasswordUri = null,
    string KeystoreUri = null,
    string Realm = null,
    double TgtLifetimeHours = null,
    string TruststorePasswordUri = null,
    string TruststoreUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.kmsKeyUri">KmsKeyUri</a></code> | <code>string</code> | The uri of the KMS key used to encrypt various sensitive files. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.rootPrincipalPasswordUri">RootPrincipalPasswordUri</a></code> | <code>string</code> | The cloud Storage URI of a KMS encrypted file containing the root principal password. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.crossRealmTrustAdminServer">CrossRealmTrustAdminServer</a></code> | <code>string</code> | The admin server (IP or hostname) for the remote trusted realm in a cross realm trust relationship. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.crossRealmTrustKdc">CrossRealmTrustKdc</a></code> | <code>string</code> | The KDC (IP or hostname) for the remote trusted realm in a cross realm trust relationship. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.crossRealmTrustRealm">CrossRealmTrustRealm</a></code> | <code>string</code> | The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.crossRealmTrustSharedPasswordUri">CrossRealmTrustSharedPasswordUri</a></code> | <code>string</code> | The Cloud Storage URI of a KMS encrypted file containing the shared password between the on-cluster Kerberos realm and the remote trusted realm, in a cross realm trust relationship. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.enableKerberos">EnableKerberos</a></code> | <code>object</code> | Flag to indicate whether to Kerberize the cluster. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.kdcDbKeyUri">KdcDbKeyUri</a></code> | <code>string</code> | The Cloud Storage URI of a KMS encrypted file containing the master key of the KDC database. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.keyPasswordUri">KeyPasswordUri</a></code> | <code>string</code> | The Cloud Storage URI of a KMS encrypted file containing the password to the user provided key. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.keystorePasswordUri">KeystorePasswordUri</a></code> | <code>string</code> | The Cloud Storage URI of a KMS encrypted file containing the password to the user provided keystore. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.keystoreUri">KeystoreUri</a></code> | <code>string</code> | The Cloud Storage URI of the keystore file used for SSL encryption. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.realm">Realm</a></code> | <code>string</code> | The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.tgtLifetimeHours">TgtLifetimeHours</a></code> | <code>double</code> | The lifetime of the ticket granting ticket, in hours. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.truststorePasswordUri">TruststorePasswordUri</a></code> | <code>string</code> | The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.truststoreUri">TruststoreUri</a></code> | <code>string</code> | The Cloud Storage URI of the truststore file used for SSL encryption. |

---

##### `KmsKeyUri`<sup>Required</sup> <a name="KmsKeyUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.kmsKeyUri"></a>

```csharp
public string KmsKeyUri { get; set; }
```

- *Type:* string

The uri of the KMS key used to encrypt various sensitive files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#kms_key_uri DataprocCluster#kms_key_uri}

---

##### `RootPrincipalPasswordUri`<sup>Required</sup> <a name="RootPrincipalPasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.rootPrincipalPasswordUri"></a>

```csharp
public string RootPrincipalPasswordUri { get; set; }
```

- *Type:* string

The cloud Storage URI of a KMS encrypted file containing the root principal password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#root_principal_password_uri DataprocCluster#root_principal_password_uri}

---

##### `CrossRealmTrustAdminServer`<sup>Optional</sup> <a name="CrossRealmTrustAdminServer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.crossRealmTrustAdminServer"></a>

```csharp
public string CrossRealmTrustAdminServer { get; set; }
```

- *Type:* string

The admin server (IP or hostname) for the remote trusted realm in a cross realm trust relationship.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#cross_realm_trust_admin_server DataprocCluster#cross_realm_trust_admin_server}

---

##### `CrossRealmTrustKdc`<sup>Optional</sup> <a name="CrossRealmTrustKdc" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.crossRealmTrustKdc"></a>

```csharp
public string CrossRealmTrustKdc { get; set; }
```

- *Type:* string

The KDC (IP or hostname) for the remote trusted realm in a cross realm trust relationship.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#cross_realm_trust_kdc DataprocCluster#cross_realm_trust_kdc}

---

##### `CrossRealmTrustRealm`<sup>Optional</sup> <a name="CrossRealmTrustRealm" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.crossRealmTrustRealm"></a>

```csharp
public string CrossRealmTrustRealm { get; set; }
```

- *Type:* string

The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#cross_realm_trust_realm DataprocCluster#cross_realm_trust_realm}

---

##### `CrossRealmTrustSharedPasswordUri`<sup>Optional</sup> <a name="CrossRealmTrustSharedPasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.crossRealmTrustSharedPasswordUri"></a>

```csharp
public string CrossRealmTrustSharedPasswordUri { get; set; }
```

- *Type:* string

The Cloud Storage URI of a KMS encrypted file containing the shared password between the on-cluster Kerberos realm and the remote trusted realm, in a cross realm trust relationship.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#cross_realm_trust_shared_password_uri DataprocCluster#cross_realm_trust_shared_password_uri}

---

##### `EnableKerberos`<sup>Optional</sup> <a name="EnableKerberos" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.enableKerberos"></a>

```csharp
public object EnableKerberos { get; set; }
```

- *Type:* object

Flag to indicate whether to Kerberize the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#enable_kerberos DataprocCluster#enable_kerberos}

---

##### `KdcDbKeyUri`<sup>Optional</sup> <a name="KdcDbKeyUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.kdcDbKeyUri"></a>

```csharp
public string KdcDbKeyUri { get; set; }
```

- *Type:* string

The Cloud Storage URI of a KMS encrypted file containing the master key of the KDC database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#kdc_db_key_uri DataprocCluster#kdc_db_key_uri}

---

##### `KeyPasswordUri`<sup>Optional</sup> <a name="KeyPasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.keyPasswordUri"></a>

```csharp
public string KeyPasswordUri { get; set; }
```

- *Type:* string

The Cloud Storage URI of a KMS encrypted file containing the password to the user provided key.

For the self-signed certificate, this password is generated by Dataproc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#key_password_uri DataprocCluster#key_password_uri}

---

##### `KeystorePasswordUri`<sup>Optional</sup> <a name="KeystorePasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.keystorePasswordUri"></a>

```csharp
public string KeystorePasswordUri { get; set; }
```

- *Type:* string

The Cloud Storage URI of a KMS encrypted file containing the password to the user provided keystore.

For the self-signed certificate, this password is generated
by Dataproc

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#keystore_password_uri DataprocCluster#keystore_password_uri}

---

##### `KeystoreUri`<sup>Optional</sup> <a name="KeystoreUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.keystoreUri"></a>

```csharp
public string KeystoreUri { get; set; }
```

- *Type:* string

The Cloud Storage URI of the keystore file used for SSL encryption.

If not provided, Dataproc will provide a self-signed certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#keystore_uri DataprocCluster#keystore_uri}

---

##### `Realm`<sup>Optional</sup> <a name="Realm" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.realm"></a>

```csharp
public string Realm { get; set; }
```

- *Type:* string

The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#realm DataprocCluster#realm}

---

##### `TgtLifetimeHours`<sup>Optional</sup> <a name="TgtLifetimeHours" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.tgtLifetimeHours"></a>

```csharp
public double TgtLifetimeHours { get; set; }
```

- *Type:* double

The lifetime of the ticket granting ticket, in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#tgt_lifetime_hours DataprocCluster#tgt_lifetime_hours}

---

##### `TruststorePasswordUri`<sup>Optional</sup> <a name="TruststorePasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.truststorePasswordUri"></a>

```csharp
public string TruststorePasswordUri { get; set; }
```

- *Type:* string

The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore.

For the self-signed certificate, this password is generated by Dataproc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#truststore_password_uri DataprocCluster#truststore_password_uri}

---

##### `TruststoreUri`<sup>Optional</sup> <a name="TruststoreUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.truststoreUri"></a>

```csharp
public string TruststoreUri { get; set; }
```

- *Type:* string

The Cloud Storage URI of the truststore file used for SSL encryption.

If not provided, Dataproc will provide a self-signed certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#truststore_uri DataprocCluster#truststore_uri}

---

### DataprocClusterClusterConfigSoftwareConfig <a name="DataprocClusterClusterConfigSoftwareConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigSoftwareConfig {
    string ImageVersion = null,
    string[] OptionalComponents = null,
    System.Collections.Generic.IDictionary<string, string> OverrideProperties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig.property.imageVersion">ImageVersion</a></code> | <code>string</code> | The Cloud Dataproc image version to use for the cluster - this controls the sets of software versions installed onto the nodes when you create clusters. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig.property.optionalComponents">OptionalComponents</a></code> | <code>string[]</code> | The set of optional components to activate on the cluster. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig.property.overrideProperties">OverrideProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A list of override and additional properties (key/value pairs) used to modify various aspects of the common configuration files used when creating a cluster. |

---

##### `ImageVersion`<sup>Optional</sup> <a name="ImageVersion" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig.property.imageVersion"></a>

```csharp
public string ImageVersion { get; set; }
```

- *Type:* string

The Cloud Dataproc image version to use for the cluster - this controls the sets of software versions installed onto the nodes when you create clusters.

If not specified, defaults to the latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#image_version DataprocCluster#image_version}

---

##### `OptionalComponents`<sup>Optional</sup> <a name="OptionalComponents" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig.property.optionalComponents"></a>

```csharp
public string[] OptionalComponents { get; set; }
```

- *Type:* string[]

The set of optional components to activate on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#optional_components DataprocCluster#optional_components}

---

##### `OverrideProperties`<sup>Optional</sup> <a name="OverrideProperties" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig.property.overrideProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OverrideProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A list of override and additional properties (key/value pairs) used to modify various aspects of the common configuration files used when creating a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#override_properties DataprocCluster#override_properties}

---

### DataprocClusterClusterConfigWorkerConfig <a name="DataprocClusterClusterConfigWorkerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigWorkerConfig {
    object Accelerators = null,
    DataprocClusterClusterConfigWorkerConfigDiskConfig DiskConfig = null,
    string ImageUri = null,
    string MachineType = null,
    string MinCpuPlatform = null,
    double NumInstances = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.accelerators">Accelerators</a></code> | <code>object</code> | accelerators block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.diskConfig">DiskConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig">DataprocClusterClusterConfigWorkerConfigDiskConfig</a></code> | disk_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.imageUri">ImageUri</a></code> | <code>string</code> | The URI for the image to use for this master/worker. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.machineType">MachineType</a></code> | <code>string</code> | The name of a Google Compute Engine machine type to create for the master/worker. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>string</code> | The name of a minimum generation of CPU family for the master/worker. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.numInstances">NumInstances</a></code> | <code>double</code> | Specifies the number of master/worker nodes to create. If not specified, GCP will default to a predetermined computed value. |

---

##### `Accelerators`<sup>Optional</sup> <a name="Accelerators" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.accelerators"></a>

```csharp
public object Accelerators { get; set; }
```

- *Type:* object

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#accelerators DataprocCluster#accelerators}

---

##### `DiskConfig`<sup>Optional</sup> <a name="DiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.diskConfig"></a>

```csharp
public DataprocClusterClusterConfigWorkerConfigDiskConfig DiskConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig">DataprocClusterClusterConfigWorkerConfigDiskConfig</a>

disk_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#disk_config DataprocCluster#disk_config}

---

##### `ImageUri`<sup>Optional</sup> <a name="ImageUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.imageUri"></a>

```csharp
public string ImageUri { get; set; }
```

- *Type:* string

The URI for the image to use for this master/worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#image_uri DataprocCluster#image_uri}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The name of a Google Compute Engine machine type to create for the master/worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#machine_type DataprocCluster#machine_type}

---

##### `MinCpuPlatform`<sup>Optional</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.minCpuPlatform"></a>

```csharp
public string MinCpuPlatform { get; set; }
```

- *Type:* string

The name of a minimum generation of CPU family for the master/worker.

If not specified, GCP will default to a predetermined computed value for each zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#min_cpu_platform DataprocCluster#min_cpu_platform}

---

##### `NumInstances`<sup>Optional</sup> <a name="NumInstances" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.numInstances"></a>

```csharp
public double NumInstances { get; set; }
```

- *Type:* double

Specifies the number of master/worker nodes to create. If not specified, GCP will default to a predetermined computed value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#num_instances DataprocCluster#num_instances}

---

### DataprocClusterClusterConfigWorkerConfigAccelerators <a name="DataprocClusterClusterConfigWorkerConfigAccelerators" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAccelerators.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigWorkerConfigAccelerators {
    double AcceleratorCount,
    string AcceleratorType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAccelerators.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | The number of the accelerator cards of this type exposed to this instance. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAccelerators.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | The short name of the accelerator type to expose to this instance. For example, nvidia-tesla-k80. |

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAccelerators.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; set; }
```

- *Type:* double

The number of the accelerator cards of this type exposed to this instance.

Often restricted to one of 1, 2, 4, or 8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#accelerator_count DataprocCluster#accelerator_count}

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAccelerators.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; set; }
```

- *Type:* string

The short name of the accelerator type to expose to this instance. For example, nvidia-tesla-k80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#accelerator_type DataprocCluster#accelerator_type}

---

### DataprocClusterClusterConfigWorkerConfigDiskConfig <a name="DataprocClusterClusterConfigWorkerConfigDiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigWorkerConfigDiskConfig {
    double BootDiskSizeGb = null,
    string BootDiskType = null,
    double NumLocalSsds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | Size of the primary disk attached to each node, specified in GB. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig.property.bootDiskType">BootDiskType</a></code> | <code>string</code> | The disk type of the primary disk attached to each node. Such as "pd-ssd" or "pd-standard". Defaults to "pd-standard". |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig.property.numLocalSsds">NumLocalSsds</a></code> | <code>double</code> | The amount of local SSD disks that will be attached to each master cluster node. Defaults to 0. |

---

##### `BootDiskSizeGb`<sup>Optional</sup> <a name="BootDiskSizeGb" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; set; }
```

- *Type:* double

Size of the primary disk attached to each node, specified in GB.

The primary disk contains the boot volume and system libraries, and the smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#boot_disk_size_gb DataprocCluster#boot_disk_size_gb}

---

##### `BootDiskType`<sup>Optional</sup> <a name="BootDiskType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig.property.bootDiskType"></a>

```csharp
public string BootDiskType { get; set; }
```

- *Type:* string

The disk type of the primary disk attached to each node. Such as "pd-ssd" or "pd-standard". Defaults to "pd-standard".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#boot_disk_type DataprocCluster#boot_disk_type}

---

##### `NumLocalSsds`<sup>Optional</sup> <a name="NumLocalSsds" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig.property.numLocalSsds"></a>

```csharp
public double NumLocalSsds { get; set; }
```

- *Type:* double

The amount of local SSD disks that will be attached to each master cluster node. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#num_local_ssds DataprocCluster#num_local_ssds}

---

### DataprocClusterConfig <a name="DataprocClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    DataprocClusterClusterConfig ClusterConfig = null,
    string GracefulDecommissionTimeout = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    string Region = null,
    DataprocClusterTimeouts Timeouts = null,
    DataprocClusterVirtualClusterConfig VirtualClusterConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.name">Name</a></code> | <code>string</code> | The name of the cluster, unique within the project and zone. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig">DataprocClusterClusterConfig</a></code> | cluster_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.gracefulDecommissionTimeout">GracefulDecommissionTimeout</a></code> | <code>string</code> | The timeout duration which allows graceful decomissioning when you change the number of worker nodes directly through a terraform apply. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#id DataprocCluster#id}. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The list of labels (key/value pairs) to be applied to instances in the cluster. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the cluster will exist. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.region">Region</a></code> | <code>string</code> | The region in which the cluster and associated nodes will be created in. Defaults to global. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts">DataprocClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.virtualClusterConfig">VirtualClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig">DataprocClusterVirtualClusterConfig</a></code> | virtual_cluster_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the cluster, unique within the project and zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#name DataprocCluster#name}

---

##### `ClusterConfig`<sup>Optional</sup> <a name="ClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.clusterConfig"></a>

```csharp
public DataprocClusterClusterConfig ClusterConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig">DataprocClusterClusterConfig</a>

cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#cluster_config DataprocCluster#cluster_config}

---

##### `GracefulDecommissionTimeout`<sup>Optional</sup> <a name="GracefulDecommissionTimeout" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.gracefulDecommissionTimeout"></a>

```csharp
public string GracefulDecommissionTimeout { get; set; }
```

- *Type:* string

The timeout duration which allows graceful decomissioning when you change the number of worker nodes directly through a terraform apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#graceful_decommission_timeout DataprocCluster#graceful_decommission_timeout}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#id DataprocCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The list of labels (key/value pairs) to be applied to instances in the cluster.

GCP generates some itself including goog-dataproc-cluster-name which is the name of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#labels DataprocCluster#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the cluster will exist.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#project DataprocCluster#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region in which the cluster and associated nodes will be created in. Defaults to global.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#region DataprocCluster#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.timeouts"></a>

```csharp
public DataprocClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts">DataprocClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#timeouts DataprocCluster#timeouts}

---

##### `VirtualClusterConfig`<sup>Optional</sup> <a name="VirtualClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.virtualClusterConfig"></a>

```csharp
public DataprocClusterVirtualClusterConfig VirtualClusterConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig">DataprocClusterVirtualClusterConfig</a>

virtual_cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#virtual_cluster_config DataprocCluster#virtual_cluster_config}

---

### DataprocClusterTimeouts <a name="DataprocClusterTimeouts" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#create DataprocCluster#create}. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#delete DataprocCluster#delete}. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#update DataprocCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#create DataprocCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#delete DataprocCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#update DataprocCluster#update}.

---

### DataprocClusterVirtualClusterConfig <a name="DataprocClusterVirtualClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfig {
    DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig AuxiliaryServicesConfig = null,
    DataprocClusterVirtualClusterConfigKubernetesClusterConfig KubernetesClusterConfig = null,
    string StagingBucket = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig.property.auxiliaryServicesConfig">AuxiliaryServicesConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig</a></code> | auxiliary_services_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig.property.kubernetesClusterConfig">KubernetesClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfig</a></code> | kubernetes_cluster_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig.property.stagingBucket">StagingBucket</a></code> | <code>string</code> | A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. |

---

##### `AuxiliaryServicesConfig`<sup>Optional</sup> <a name="AuxiliaryServicesConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig.property.auxiliaryServicesConfig"></a>

```csharp
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig AuxiliaryServicesConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig</a>

auxiliary_services_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#auxiliary_services_config DataprocCluster#auxiliary_services_config}

---

##### `KubernetesClusterConfig`<sup>Optional</sup> <a name="KubernetesClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig.property.kubernetesClusterConfig"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfig KubernetesClusterConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfig</a>

kubernetes_cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#kubernetes_cluster_config DataprocCluster#kubernetes_cluster_config}

---

##### `StagingBucket`<sup>Optional</sup> <a name="StagingBucket" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig.property.stagingBucket"></a>

```csharp
public string StagingBucket { get; set; }
```

- *Type:* string

A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output.

If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#staging_bucket DataprocCluster#staging_bucket}

---

### DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig <a name="DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig {
    DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig MetastoreConfig = null,
    DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig SparkHistoryServerConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig.property.metastoreConfig">MetastoreConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig</a></code> | metastore_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig.property.sparkHistoryServerConfig">SparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig</a></code> | spark_history_server_config block. |

---

##### `MetastoreConfig`<sup>Optional</sup> <a name="MetastoreConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig.property.metastoreConfig"></a>

```csharp
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig MetastoreConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig</a>

metastore_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#metastore_config DataprocCluster#metastore_config}

---

##### `SparkHistoryServerConfig`<sup>Optional</sup> <a name="SparkHistoryServerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig.property.sparkHistoryServerConfig"></a>

```csharp
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig SparkHistoryServerConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#spark_history_server_config DataprocCluster#spark_history_server_config}

---

### DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig <a name="DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig {
    string DataprocMetastoreService = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig.property.dataprocMetastoreService">DataprocMetastoreService</a></code> | <code>string</code> | The Hive Metastore configuration for this workload. |

---

##### `DataprocMetastoreService`<sup>Optional</sup> <a name="DataprocMetastoreService" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig.property.dataprocMetastoreService"></a>

```csharp
public string DataprocMetastoreService { get; set; }
```

- *Type:* string

The Hive Metastore configuration for this workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#dataproc_metastore_service DataprocCluster#dataproc_metastore_service}

---

### DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig <a name="DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig {
    string DataprocCluster = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig.property.dataprocCluster">DataprocCluster</a></code> | <code>string</code> | Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. |

---

##### `DataprocCluster`<sup>Optional</sup> <a name="DataprocCluster" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig.property.dataprocCluster"></a>

```csharp
public string DataprocCluster { get; set; }
```

- *Type:* string

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#dataproc_cluster DataprocCluster#dataproc_cluster}

---

### DataprocClusterVirtualClusterConfigKubernetesClusterConfig <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfig {
    DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig GkeClusterConfig,
    DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig KubernetesSoftwareConfig,
    string KubernetesNamespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig.property.gkeClusterConfig">GkeClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig</a></code> | gke_cluster_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig.property.kubernetesSoftwareConfig">KubernetesSoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig</a></code> | kubernetes_software_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig.property.kubernetesNamespace">KubernetesNamespace</a></code> | <code>string</code> | A namespace within the Kubernetes cluster to deploy into. |

---

##### `GkeClusterConfig`<sup>Required</sup> <a name="GkeClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig.property.gkeClusterConfig"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig GkeClusterConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig</a>

gke_cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#gke_cluster_config DataprocCluster#gke_cluster_config}

---

##### `KubernetesSoftwareConfig`<sup>Required</sup> <a name="KubernetesSoftwareConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig.property.kubernetesSoftwareConfig"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig KubernetesSoftwareConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig</a>

kubernetes_software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#kubernetes_software_config DataprocCluster#kubernetes_software_config}

---

##### `KubernetesNamespace`<sup>Optional</sup> <a name="KubernetesNamespace" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig.property.kubernetesNamespace"></a>

```csharp
public string KubernetesNamespace { get; set; }
```

- *Type:* string

A namespace within the Kubernetes cluster to deploy into.

If this namespace does not exist, it is created. If it exists, Dataproc verifies that another Dataproc VirtualCluster is not installed into it. If not specified, the name of the Dataproc Cluster is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#kubernetes_namespace DataprocCluster#kubernetes_namespace}

---

### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig {
    string GkeClusterTarget = null,
    object NodePoolTarget = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig.property.gkeClusterTarget">GkeClusterTarget</a></code> | <code>string</code> | A target GKE cluster to deploy to. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig.property.nodePoolTarget">NodePoolTarget</a></code> | <code>object</code> | node_pool_target block. |

---

##### `GkeClusterTarget`<sup>Optional</sup> <a name="GkeClusterTarget" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig.property.gkeClusterTarget"></a>

```csharp
public string GkeClusterTarget { get; set; }
```

- *Type:* string

A target GKE cluster to deploy to.

It must be in the same project and region as the Dataproc cluster (the GKE cluster can be zonal or regional). Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#gke_cluster_target DataprocCluster#gke_cluster_target}

---

##### `NodePoolTarget`<sup>Optional</sup> <a name="NodePoolTarget" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig.property.nodePoolTarget"></a>

```csharp
public object NodePoolTarget { get; set; }
```

- *Type:* object

node_pool_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#node_pool_target DataprocCluster#node_pool_target}

---

### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget {
    string NodePool,
    string[] Roles,
    DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig NodePoolConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget.property.nodePool">NodePool</a></code> | <code>string</code> | The target GKE node pool. Format: 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{nodePool}'. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget.property.roles">Roles</a></code> | <code>string[]</code> | The roles associated with the GKE node pool. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget.property.nodePoolConfig">NodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig</a></code> | node_pool_config block. |

---

##### `NodePool`<sup>Required</sup> <a name="NodePool" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget.property.nodePool"></a>

```csharp
public string NodePool { get; set; }
```

- *Type:* string

The target GKE node pool. Format: 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{nodePool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#node_pool DataprocCluster#node_pool}

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget.property.roles"></a>

```csharp
public string[] Roles { get; set; }
```

- *Type:* string[]

The roles associated with the GKE node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#roles DataprocCluster#roles}

---

##### `NodePoolConfig`<sup>Optional</sup> <a name="NodePoolConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget.property.nodePoolConfig"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig NodePoolConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig</a>

node_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#node_pool_config DataprocCluster#node_pool_config}

---

### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig {
    string[] Locations,
    DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling Autoscaling = null,
    DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig Config = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig.property.locations">Locations</a></code> | <code>string[]</code> | The list of Compute Engine zones where node pool nodes associated with a Dataproc on GKE virtual cluster will be located. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig.property.autoscaling">Autoscaling</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig</a></code> | config block. |

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig.property.locations"></a>

```csharp
public string[] Locations { get; set; }
```

- *Type:* string[]

The list of Compute Engine zones where node pool nodes associated with a Dataproc on GKE virtual cluster will be located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#locations DataprocCluster#locations}

---

##### `Autoscaling`<sup>Optional</sup> <a name="Autoscaling" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig.property.autoscaling"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling Autoscaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#autoscaling DataprocCluster#autoscaling}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig.property.config"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#config DataprocCluster#config}

---

### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling {
    double MaxNodeCount = null,
    double MinNodeCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | The maximum number of nodes in the node pool. Must be >= minNodeCount, and must be > 0. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling.property.minNodeCount">MinNodeCount</a></code> | <code>double</code> | The minimum number of nodes in the node pool. Must be >= 0 and <= maxNodeCount. |

---

##### `MaxNodeCount`<sup>Optional</sup> <a name="MaxNodeCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; set; }
```

- *Type:* double

The maximum number of nodes in the node pool. Must be >= minNodeCount, and must be > 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#max_node_count DataprocCluster#max_node_count}

---

##### `MinNodeCount`<sup>Optional</sup> <a name="MinNodeCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling.property.minNodeCount"></a>

```csharp
public double MinNodeCount { get; set; }
```

- *Type:* double

The minimum number of nodes in the node pool. Must be >= 0 and <= maxNodeCount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#min_node_count DataprocCluster#min_node_count}

---

### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig {
    double LocalSsdCount = null,
    string MachineType = null,
    string MinCpuPlatform = null,
    object Preemptible = null,
    object Spot = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.property.localSsdCount">LocalSsdCount</a></code> | <code>double</code> | The minimum number of nodes in the node pool. Must be >= 0 and <= maxNodeCount. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.property.machineType">MachineType</a></code> | <code>string</code> | The name of a Compute Engine machine type. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>string</code> | Minimum CPU platform to be used by this instance. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.property.preemptible">Preemptible</a></code> | <code>object</code> | Whether the nodes are created as preemptible VM instances. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.property.spot">Spot</a></code> | <code>object</code> | Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag. |

---

##### `LocalSsdCount`<sup>Optional</sup> <a name="LocalSsdCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.property.localSsdCount"></a>

```csharp
public double LocalSsdCount { get; set; }
```

- *Type:* double

The minimum number of nodes in the node pool. Must be >= 0 and <= maxNodeCount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#local_ssd_count DataprocCluster#local_ssd_count}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The name of a Compute Engine machine type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#machine_type DataprocCluster#machine_type}

---

##### `MinCpuPlatform`<sup>Optional</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.property.minCpuPlatform"></a>

```csharp
public string MinCpuPlatform { get; set; }
```

- *Type:* string

Minimum CPU platform to be used by this instance.

The instance may be scheduled on the specified or a newer CPU platform. Specify the friendly names of CPU platforms, such as "Intel Haswell" or "Intel Sandy Bridge".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#min_cpu_platform DataprocCluster#min_cpu_platform}

---

##### `Preemptible`<sup>Optional</sup> <a name="Preemptible" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.property.preemptible"></a>

```csharp
public object Preemptible { get; set; }
```

- *Type:* object

Whether the nodes are created as preemptible VM instances.

Preemptible nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#preemptible DataprocCluster#preemptible}

---

##### `Spot`<sup>Optional</sup> <a name="Spot" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.property.spot"></a>

```csharp
public object Spot { get; set; }
```

- *Type:* object

Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#spot DataprocCluster#spot}

---

### DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig {
    System.Collections.Generic.IDictionary<string, string> ComponentVersion,
    System.Collections.Generic.IDictionary<string, string> Properties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig.property.componentVersion">ComponentVersion</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The components that should be installed in this Dataproc cluster. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The properties to set on daemon config files. Property keys are specified in prefix:property format, for example spark:spark.kubernetes.container.image. |

---

##### `ComponentVersion`<sup>Required</sup> <a name="ComponentVersion" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig.property.componentVersion"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ComponentVersion { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The components that should be installed in this Dataproc cluster.

The key must be a string from the KubernetesComponent enumeration. The value is the version of the software to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#component_version DataprocCluster#component_version}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The properties to set on daemon config files. Property keys are specified in prefix:property format, for example spark:spark.kubernetes.container.image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dataproc_cluster#properties DataprocCluster#properties}

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocClusterClusterConfigAutoscalingConfigOutputReference <a name="DataprocClusterClusterConfigAutoscalingConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigAutoscalingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.property.policyUriInput">PolicyUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.property.policyUri">PolicyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig">DataprocClusterClusterConfigAutoscalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyUriInput`<sup>Optional</sup> <a name="PolicyUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.property.policyUriInput"></a>

```csharp
public string PolicyUriInput { get; }
```

- *Type:* string

---

##### `PolicyUri`<sup>Required</sup> <a name="PolicyUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.property.policyUri"></a>

```csharp
public string PolicyUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterClusterConfigAutoscalingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig">DataprocClusterClusterConfigAutoscalingConfig</a>

---


### DataprocClusterClusterConfigDataprocMetricConfigMetricsList <a name="DataprocClusterClusterConfigDataprocMetricConfigMetricsList" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigDataprocMetricConfigMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.get"></a>

```csharp
private DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference <a name="DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.resetMetricOverrides">ResetMetricOverrides</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricOverrides` <a name="ResetMetricOverrides" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.resetMetricOverrides"></a>

```csharp
private void ResetMetricOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.metricOverridesInput">MetricOverridesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.metricSourceInput">MetricSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.metricOverrides">MetricOverrides</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.metricSource">MetricSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricOverridesInput`<sup>Optional</sup> <a name="MetricOverridesInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.metricOverridesInput"></a>

```csharp
public string[] MetricOverridesInput { get; }
```

- *Type:* string[]

---

##### `MetricSourceInput`<sup>Optional</sup> <a name="MetricSourceInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.metricSourceInput"></a>

```csharp
public string MetricSourceInput { get; }
```

- *Type:* string

---

##### `MetricOverrides`<sup>Required</sup> <a name="MetricOverrides" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.metricOverrides"></a>

```csharp
public string[] MetricOverrides { get; }
```

- *Type:* string[]

---

##### `MetricSource`<sup>Required</sup> <a name="MetricSource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.metricSource"></a>

```csharp
public string MetricSource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataprocClusterClusterConfigDataprocMetricConfigOutputReference <a name="DataprocClusterClusterConfigDataprocMetricConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigDataprocMetricConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.putMetrics">PutMetrics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetrics` <a name="PutMetrics" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.putMetrics"></a>

```csharp
private void PutMetrics(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.putMetrics.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.property.metrics">Metrics</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList">DataprocClusterClusterConfigDataprocMetricConfigMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.property.metricsInput">MetricsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig">DataprocClusterClusterConfigDataprocMetricConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.property.metrics"></a>

```csharp
public DataprocClusterClusterConfigDataprocMetricConfigMetricsList Metrics { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList">DataprocClusterClusterConfigDataprocMetricConfigMetricsList</a>

---

##### `MetricsInput`<sup>Optional</sup> <a name="MetricsInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.property.metricsInput"></a>

```csharp
public object MetricsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterClusterConfigDataprocMetricConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig">DataprocClusterClusterConfigDataprocMetricConfig</a>

---


### DataprocClusterClusterConfigEncryptionConfigOutputReference <a name="DataprocClusterClusterConfigEncryptionConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigEncryptionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig">DataprocClusterClusterConfigEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterClusterConfigEncryptionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig">DataprocClusterClusterConfigEncryptionConfig</a>

---


### DataprocClusterClusterConfigEndpointConfigOutputReference <a name="DataprocClusterClusterConfigEndpointConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigEndpointConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.httpPorts">HttpPorts</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.enableHttpPortAccessInput">EnableHttpPortAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.enableHttpPortAccess">EnableHttpPortAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig">DataprocClusterClusterConfigEndpointConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpPorts`<sup>Required</sup> <a name="HttpPorts" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.httpPorts"></a>

```csharp
public StringMap HttpPorts { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EnableHttpPortAccessInput`<sup>Optional</sup> <a name="EnableHttpPortAccessInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.enableHttpPortAccessInput"></a>

```csharp
public object EnableHttpPortAccessInput { get; }
```

- *Type:* object

---

##### `EnableHttpPortAccess`<sup>Required</sup> <a name="EnableHttpPortAccess" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.enableHttpPortAccess"></a>

```csharp
public object EnableHttpPortAccess { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterClusterConfigEndpointConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig">DataprocClusterClusterConfigEndpointConfig</a>

---


### DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference <a name="DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.property.nodeGroupUriInput">NodeGroupUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.property.nodeGroupUri">NodeGroupUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity">DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeGroupUriInput`<sup>Optional</sup> <a name="NodeGroupUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.property.nodeGroupUriInput"></a>

```csharp
public string NodeGroupUriInput { get; }
```

- *Type:* string

---

##### `NodeGroupUri`<sup>Required</sup> <a name="NodeGroupUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.property.nodeGroupUri"></a>

```csharp
public string NodeGroupUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity">DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity</a>

---


### DataprocClusterClusterConfigGceClusterConfigOutputReference <a name="DataprocClusterClusterConfigGceClusterConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigGceClusterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.putNodeGroupAffinity">PutNodeGroupAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.putReservationAffinity">PutReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.putShieldedInstanceConfig">PutShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetInternalIpOnly">ResetInternalIpOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetNodeGroupAffinity">ResetNodeGroupAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetReservationAffinity">ResetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetServiceAccountScopes">ResetServiceAccountScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetShieldedInstanceConfig">ResetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodeGroupAffinity` <a name="PutNodeGroupAffinity" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.putNodeGroupAffinity"></a>

```csharp
private void PutNodeGroupAffinity(DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.putNodeGroupAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity">DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity</a>

---

##### `PutReservationAffinity` <a name="PutReservationAffinity" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.putReservationAffinity"></a>

```csharp
private void PutReservationAffinity(DataprocClusterClusterConfigGceClusterConfigReservationAffinity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity">DataprocClusterClusterConfigGceClusterConfigReservationAffinity</a>

---

##### `PutShieldedInstanceConfig` <a name="PutShieldedInstanceConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.putShieldedInstanceConfig"></a>

```csharp
private void PutShieldedInstanceConfig(DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig">DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig</a>

---

##### `ResetInternalIpOnly` <a name="ResetInternalIpOnly" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetInternalIpOnly"></a>

```csharp
private void ResetInternalIpOnly()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetNodeGroupAffinity` <a name="ResetNodeGroupAffinity" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetNodeGroupAffinity"></a>

```csharp
private void ResetNodeGroupAffinity()
```

##### `ResetReservationAffinity` <a name="ResetReservationAffinity" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetReservationAffinity"></a>

```csharp
private void ResetReservationAffinity()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetServiceAccountScopes` <a name="ResetServiceAccountScopes" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetServiceAccountScopes"></a>

```csharp
private void ResetServiceAccountScopes()
```

##### `ResetShieldedInstanceConfig` <a name="ResetShieldedInstanceConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetShieldedInstanceConfig"></a>

```csharp
private void ResetShieldedInstanceConfig()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetSubnetwork"></a>

```csharp
private void ResetSubnetwork()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetZone"></a>

```csharp
private void ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.nodeGroupAffinity">NodeGroupAffinity</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference">DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference">DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference">DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.internalIpOnlyInput">InternalIpOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.nodeGroupAffinityInput">NodeGroupAffinityInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity">DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.reservationAffinityInput">ReservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity">DataprocClusterClusterConfigGceClusterConfigReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.serviceAccountScopesInput">ServiceAccountScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.shieldedInstanceConfigInput">ShieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig">DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.internalIpOnly">InternalIpOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.serviceAccountScopes">ServiceAccountScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig">DataprocClusterClusterConfigGceClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeGroupAffinity`<sup>Required</sup> <a name="NodeGroupAffinity" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.nodeGroupAffinity"></a>

```csharp
public DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference NodeGroupAffinity { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference">DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference</a>

---

##### `ReservationAffinity`<sup>Required</sup> <a name="ReservationAffinity" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.reservationAffinity"></a>

```csharp
public DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference ReservationAffinity { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference">DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference</a>

---

##### `ShieldedInstanceConfig`<sup>Required</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.shieldedInstanceConfig"></a>

```csharp
public DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference ShieldedInstanceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference">DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference</a>

---

##### `InternalIpOnlyInput`<sup>Optional</sup> <a name="InternalIpOnlyInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.internalIpOnlyInput"></a>

```csharp
public object InternalIpOnlyInput { get; }
```

- *Type:* object

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `NodeGroupAffinityInput`<sup>Optional</sup> <a name="NodeGroupAffinityInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.nodeGroupAffinityInput"></a>

```csharp
public DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity NodeGroupAffinityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity">DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity</a>

---

##### `ReservationAffinityInput`<sup>Optional</sup> <a name="ReservationAffinityInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.reservationAffinityInput"></a>

```csharp
public DataprocClusterClusterConfigGceClusterConfigReservationAffinity ReservationAffinityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity">DataprocClusterClusterConfigGceClusterConfigReservationAffinity</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `ServiceAccountScopesInput`<sup>Optional</sup> <a name="ServiceAccountScopesInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.serviceAccountScopesInput"></a>

```csharp
public string[] ServiceAccountScopesInput { get; }
```

- *Type:* string[]

---

##### `ShieldedInstanceConfigInput`<sup>Optional</sup> <a name="ShieldedInstanceConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.shieldedInstanceConfigInput"></a>

```csharp
public DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig ShieldedInstanceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig">DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig</a>

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.subnetworkInput"></a>

```csharp
public string SubnetworkInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `InternalIpOnly`<sup>Required</sup> <a name="InternalIpOnly" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.internalIpOnly"></a>

```csharp
public object InternalIpOnly { get; }
```

- *Type:* object

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `ServiceAccountScopes`<sup>Required</sup> <a name="ServiceAccountScopes" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.serviceAccountScopes"></a>

```csharp
public string[] ServiceAccountScopes { get; }
```

- *Type:* string[]

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterClusterConfigGceClusterConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig">DataprocClusterClusterConfigGceClusterConfig</a>

---


### DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference <a name="DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.resetConsumeReservationType">ResetConsumeReservationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConsumeReservationType` <a name="ResetConsumeReservationType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.resetConsumeReservationType"></a>

```csharp
private void ResetConsumeReservationType()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.consumeReservationTypeInput">ConsumeReservationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.consumeReservationType">ConsumeReservationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity">DataprocClusterClusterConfigGceClusterConfigReservationAffinity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsumeReservationTypeInput`<sup>Optional</sup> <a name="ConsumeReservationTypeInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.consumeReservationTypeInput"></a>

```csharp
public string ConsumeReservationTypeInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `ConsumeReservationType`<sup>Required</sup> <a name="ConsumeReservationType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.consumeReservationType"></a>

```csharp
public string ConsumeReservationType { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterClusterConfigGceClusterConfigReservationAffinity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity">DataprocClusterClusterConfigGceClusterConfigReservationAffinity</a>

---


### DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference <a name="DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">ResetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot">ResetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.resetEnableVtpm">ResetEnableVtpm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableIntegrityMonitoring` <a name="ResetEnableIntegrityMonitoring" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```csharp
private void ResetEnableIntegrityMonitoring()
```

##### `ResetEnableSecureBoot` <a name="ResetEnableSecureBoot" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```csharp
private void ResetEnableSecureBoot()
```

##### `ResetEnableVtpm` <a name="ResetEnableVtpm" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```csharp
private void ResetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">EnableIntegrityMonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput">EnableSecureBootInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableVtpmInput">EnableVtpmInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableVtpm">EnableVtpm</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig">DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableIntegrityMonitoringInput`<sup>Optional</sup> <a name="EnableIntegrityMonitoringInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```csharp
public object EnableIntegrityMonitoringInput { get; }
```

- *Type:* object

---

##### `EnableSecureBootInput`<sup>Optional</sup> <a name="EnableSecureBootInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```csharp
public object EnableSecureBootInput { get; }
```

- *Type:* object

---

##### `EnableVtpmInput`<sup>Optional</sup> <a name="EnableVtpmInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```csharp
public object EnableVtpmInput { get; }
```

- *Type:* object

---

##### `EnableIntegrityMonitoring`<sup>Required</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```csharp
public object EnableIntegrityMonitoring { get; }
```

- *Type:* object

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; }
```

- *Type:* object

---

##### `EnableVtpm`<sup>Required</sup> <a name="EnableVtpm" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```csharp
public object EnableVtpm { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig">DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig</a>

---


### DataprocClusterClusterConfigInitializationActionList <a name="DataprocClusterClusterConfigInitializationActionList" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigInitializationActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.get"></a>

```csharp
private DataprocClusterClusterConfigInitializationActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataprocClusterClusterConfigInitializationActionOutputReference <a name="DataprocClusterClusterConfigInitializationActionOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigInitializationActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.resetTimeoutSec">ResetTimeoutSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeoutSec` <a name="ResetTimeoutSec" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.resetTimeoutSec"></a>

```csharp
private void ResetTimeoutSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.scriptInput">ScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.timeoutSecInput">TimeoutSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.script">Script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.timeoutSec">TimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.scriptInput"></a>

```csharp
public string ScriptInput { get; }
```

- *Type:* string

---

##### `TimeoutSecInput`<sup>Optional</sup> <a name="TimeoutSecInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.timeoutSecInput"></a>

```csharp
public double TimeoutSecInput { get; }
```

- *Type:* double

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.script"></a>

```csharp
public string Script { get; }
```

- *Type:* string

---

##### `TimeoutSec`<sup>Required</sup> <a name="TimeoutSec" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.timeoutSec"></a>

```csharp
public double TimeoutSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataprocClusterClusterConfigLifecycleConfigOutputReference <a name="DataprocClusterClusterConfigLifecycleConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigLifecycleConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.resetAutoDeleteTime">ResetAutoDeleteTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.resetIdleDeleteTtl">ResetIdleDeleteTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoDeleteTime` <a name="ResetAutoDeleteTime" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.resetAutoDeleteTime"></a>

```csharp
private void ResetAutoDeleteTime()
```

##### `ResetIdleDeleteTtl` <a name="ResetIdleDeleteTtl" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.resetIdleDeleteTtl"></a>

```csharp
private void ResetIdleDeleteTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.idleStartTime">IdleStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.autoDeleteTimeInput">AutoDeleteTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.idleDeleteTtlInput">IdleDeleteTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.autoDeleteTime">AutoDeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.idleDeleteTtl">IdleDeleteTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig">DataprocClusterClusterConfigLifecycleConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdleStartTime`<sup>Required</sup> <a name="IdleStartTime" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.idleStartTime"></a>

```csharp
public string IdleStartTime { get; }
```

- *Type:* string

---

##### `AutoDeleteTimeInput`<sup>Optional</sup> <a name="AutoDeleteTimeInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.autoDeleteTimeInput"></a>

```csharp
public string AutoDeleteTimeInput { get; }
```

- *Type:* string

---

##### `IdleDeleteTtlInput`<sup>Optional</sup> <a name="IdleDeleteTtlInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.idleDeleteTtlInput"></a>

```csharp
public string IdleDeleteTtlInput { get; }
```

- *Type:* string

---

##### `AutoDeleteTime`<sup>Required</sup> <a name="AutoDeleteTime" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.autoDeleteTime"></a>

```csharp
public string AutoDeleteTime { get; }
```

- *Type:* string

---

##### `IdleDeleteTtl`<sup>Required</sup> <a name="IdleDeleteTtl" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.idleDeleteTtl"></a>

```csharp
public string IdleDeleteTtl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterClusterConfigLifecycleConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig">DataprocClusterClusterConfigLifecycleConfig</a>

---


### DataprocClusterClusterConfigMasterConfigAcceleratorsList <a name="DataprocClusterClusterConfigMasterConfigAcceleratorsList" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigMasterConfigAcceleratorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.get"></a>

```csharp
private DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference <a name="DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.acceleratorCountInput"></a>

```csharp
public double AcceleratorCountInput { get; }
```

- *Type:* double

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```csharp
public string AcceleratorTypeInput { get; }
```

- *Type:* string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; }
```

- *Type:* double

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference <a name="DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.resetBootDiskSizeGb">ResetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.resetBootDiskType">ResetBootDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.resetNumLocalSsds">ResetNumLocalSsds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBootDiskSizeGb` <a name="ResetBootDiskSizeGb" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.resetBootDiskSizeGb"></a>

```csharp
private void ResetBootDiskSizeGb()
```

##### `ResetBootDiskType` <a name="ResetBootDiskType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.resetBootDiskType"></a>

```csharp
private void ResetBootDiskType()
```

##### `ResetNumLocalSsds` <a name="ResetNumLocalSsds" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.resetNumLocalSsds"></a>

```csharp
private void ResetNumLocalSsds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.bootDiskSizeGbInput">BootDiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.bootDiskTypeInput">BootDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.numLocalSsdsInput">NumLocalSsdsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.bootDiskType">BootDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.numLocalSsds">NumLocalSsds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig">DataprocClusterClusterConfigMasterConfigDiskConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BootDiskSizeGbInput`<sup>Optional</sup> <a name="BootDiskSizeGbInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.bootDiskSizeGbInput"></a>

```csharp
public double BootDiskSizeGbInput { get; }
```

- *Type:* double

---

##### `BootDiskTypeInput`<sup>Optional</sup> <a name="BootDiskTypeInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.bootDiskTypeInput"></a>

```csharp
public string BootDiskTypeInput { get; }
```

- *Type:* string

---

##### `NumLocalSsdsInput`<sup>Optional</sup> <a name="NumLocalSsdsInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.numLocalSsdsInput"></a>

```csharp
public double NumLocalSsdsInput { get; }
```

- *Type:* double

---

##### `BootDiskSizeGb`<sup>Required</sup> <a name="BootDiskSizeGb" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; }
```

- *Type:* double

---

##### `BootDiskType`<sup>Required</sup> <a name="BootDiskType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.bootDiskType"></a>

```csharp
public string BootDiskType { get; }
```

- *Type:* string

---

##### `NumLocalSsds`<sup>Required</sup> <a name="NumLocalSsds" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.numLocalSsds"></a>

```csharp
public double NumLocalSsds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterClusterConfigMasterConfigDiskConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig">DataprocClusterClusterConfigMasterConfigDiskConfig</a>

---


### DataprocClusterClusterConfigMasterConfigOutputReference <a name="DataprocClusterClusterConfigMasterConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigMasterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.putAccelerators">PutAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.putDiskConfig">PutDiskConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetAccelerators">ResetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetDiskConfig">ResetDiskConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetImageUri">ResetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetMinCpuPlatform">ResetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetNumInstances">ResetNumInstances</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccelerators` <a name="PutAccelerators" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.putAccelerators"></a>

```csharp
private void PutAccelerators(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.putAccelerators.parameter.value"></a>

- *Type:* object

---

##### `PutDiskConfig` <a name="PutDiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.putDiskConfig"></a>

```csharp
private void PutDiskConfig(DataprocClusterClusterConfigMasterConfigDiskConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.putDiskConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig">DataprocClusterClusterConfigMasterConfigDiskConfig</a>

---

##### `ResetAccelerators` <a name="ResetAccelerators" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetAccelerators"></a>

```csharp
private void ResetAccelerators()
```

##### `ResetDiskConfig` <a name="ResetDiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetDiskConfig"></a>

```csharp
private void ResetDiskConfig()
```

##### `ResetImageUri` <a name="ResetImageUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetImageUri"></a>

```csharp
private void ResetImageUri()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetMachineType"></a>

```csharp
private void ResetMachineType()
```

##### `ResetMinCpuPlatform` <a name="ResetMinCpuPlatform" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetMinCpuPlatform"></a>

```csharp
private void ResetMinCpuPlatform()
```

##### `ResetNumInstances` <a name="ResetNumInstances" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetNumInstances"></a>

```csharp
private void ResetNumInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.accelerators">Accelerators</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList">DataprocClusterClusterConfigMasterConfigAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.diskConfig">DiskConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference">DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.instanceNames">InstanceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.acceleratorsInput">AcceleratorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.diskConfigInput">DiskConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig">DataprocClusterClusterConfigMasterConfigDiskConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.minCpuPlatformInput">MinCpuPlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.numInstancesInput">NumInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.numInstances">NumInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig">DataprocClusterClusterConfigMasterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Accelerators`<sup>Required</sup> <a name="Accelerators" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.accelerators"></a>

```csharp
public DataprocClusterClusterConfigMasterConfigAcceleratorsList Accelerators { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList">DataprocClusterClusterConfigMasterConfigAcceleratorsList</a>

---

##### `DiskConfig`<sup>Required</sup> <a name="DiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.diskConfig"></a>

```csharp
public DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference DiskConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference">DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference</a>

---

##### `InstanceNames`<sup>Required</sup> <a name="InstanceNames" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.instanceNames"></a>

```csharp
public string[] InstanceNames { get; }
```

- *Type:* string[]

---

##### `AcceleratorsInput`<sup>Optional</sup> <a name="AcceleratorsInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.acceleratorsInput"></a>

```csharp
public object AcceleratorsInput { get; }
```

- *Type:* object

---

##### `DiskConfigInput`<sup>Optional</sup> <a name="DiskConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.diskConfigInput"></a>

```csharp
public DataprocClusterClusterConfigMasterConfigDiskConfig DiskConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig">DataprocClusterClusterConfigMasterConfigDiskConfig</a>

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.imageUriInput"></a>

```csharp
public string ImageUriInput { get; }
```

- *Type:* string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `MinCpuPlatformInput`<sup>Optional</sup> <a name="MinCpuPlatformInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.minCpuPlatformInput"></a>

```csharp
public string MinCpuPlatformInput { get; }
```

- *Type:* string

---

##### `NumInstancesInput`<sup>Optional</sup> <a name="NumInstancesInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.numInstancesInput"></a>

```csharp
public double NumInstancesInput { get; }
```

- *Type:* double

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `MinCpuPlatform`<sup>Required</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.minCpuPlatform"></a>

```csharp
public string MinCpuPlatform { get; }
```

- *Type:* string

---

##### `NumInstances`<sup>Required</sup> <a name="NumInstances" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.numInstances"></a>

```csharp
public double NumInstances { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterClusterConfigMasterConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig">DataprocClusterClusterConfigMasterConfig</a>

---


### DataprocClusterClusterConfigMetastoreConfigOutputReference <a name="DataprocClusterClusterConfigMetastoreConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigMetastoreConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.property.dataprocMetastoreServiceInput">DataprocMetastoreServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.property.dataprocMetastoreService">DataprocMetastoreService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig">DataprocClusterClusterConfigMetastoreConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataprocMetastoreServiceInput`<sup>Optional</sup> <a name="DataprocMetastoreServiceInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.property.dataprocMetastoreServiceInput"></a>

```csharp
public string DataprocMetastoreServiceInput { get; }
```

- *Type:* string

---

##### `DataprocMetastoreService`<sup>Required</sup> <a name="DataprocMetastoreService" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.property.dataprocMetastoreService"></a>

```csharp
public string DataprocMetastoreService { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterClusterConfigMetastoreConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig">DataprocClusterClusterConfigMetastoreConfig</a>

---


### DataprocClusterClusterConfigOutputReference <a name="DataprocClusterClusterConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putAutoscalingConfig">PutAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putDataprocMetricConfig">PutDataprocMetricConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putEndpointConfig">PutEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putGceClusterConfig">PutGceClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putInitializationAction">PutInitializationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putLifecycleConfig">PutLifecycleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putMasterConfig">PutMasterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putMetastoreConfig">PutMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putPreemptibleWorkerConfig">PutPreemptibleWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putSecurityConfig">PutSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putSoftwareConfig">PutSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putWorkerConfig">PutWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetAutoscalingConfig">ResetAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetDataprocMetricConfig">ResetDataprocMetricConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetEndpointConfig">ResetEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetGceClusterConfig">ResetGceClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetInitializationAction">ResetInitializationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetLifecycleConfig">ResetLifecycleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetMasterConfig">ResetMasterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetMetastoreConfig">ResetMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetPreemptibleWorkerConfig">ResetPreemptibleWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetSecurityConfig">ResetSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetSoftwareConfig">ResetSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetStagingBucket">ResetStagingBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetTempBucket">ResetTempBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetWorkerConfig">ResetWorkerConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscalingConfig` <a name="PutAutoscalingConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putAutoscalingConfig"></a>

```csharp
private void PutAutoscalingConfig(DataprocClusterClusterConfigAutoscalingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putAutoscalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig">DataprocClusterClusterConfigAutoscalingConfig</a>

---

##### `PutDataprocMetricConfig` <a name="PutDataprocMetricConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putDataprocMetricConfig"></a>

```csharp
private void PutDataprocMetricConfig(DataprocClusterClusterConfigDataprocMetricConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putDataprocMetricConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig">DataprocClusterClusterConfigDataprocMetricConfig</a>

---

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putEncryptionConfig"></a>

```csharp
private void PutEncryptionConfig(DataprocClusterClusterConfigEncryptionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig">DataprocClusterClusterConfigEncryptionConfig</a>

---

##### `PutEndpointConfig` <a name="PutEndpointConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putEndpointConfig"></a>

```csharp
private void PutEndpointConfig(DataprocClusterClusterConfigEndpointConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putEndpointConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig">DataprocClusterClusterConfigEndpointConfig</a>

---

##### `PutGceClusterConfig` <a name="PutGceClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putGceClusterConfig"></a>

```csharp
private void PutGceClusterConfig(DataprocClusterClusterConfigGceClusterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putGceClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig">DataprocClusterClusterConfigGceClusterConfig</a>

---

##### `PutInitializationAction` <a name="PutInitializationAction" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putInitializationAction"></a>

```csharp
private void PutInitializationAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putInitializationAction.parameter.value"></a>

- *Type:* object

---

##### `PutLifecycleConfig` <a name="PutLifecycleConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putLifecycleConfig"></a>

```csharp
private void PutLifecycleConfig(DataprocClusterClusterConfigLifecycleConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putLifecycleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig">DataprocClusterClusterConfigLifecycleConfig</a>

---

##### `PutMasterConfig` <a name="PutMasterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putMasterConfig"></a>

```csharp
private void PutMasterConfig(DataprocClusterClusterConfigMasterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putMasterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig">DataprocClusterClusterConfigMasterConfig</a>

---

##### `PutMetastoreConfig` <a name="PutMetastoreConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putMetastoreConfig"></a>

```csharp
private void PutMetastoreConfig(DataprocClusterClusterConfigMetastoreConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putMetastoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig">DataprocClusterClusterConfigMetastoreConfig</a>

---

##### `PutPreemptibleWorkerConfig` <a name="PutPreemptibleWorkerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putPreemptibleWorkerConfig"></a>

```csharp
private void PutPreemptibleWorkerConfig(DataprocClusterClusterConfigPreemptibleWorkerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putPreemptibleWorkerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig">DataprocClusterClusterConfigPreemptibleWorkerConfig</a>

---

##### `PutSecurityConfig` <a name="PutSecurityConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putSecurityConfig"></a>

```csharp
private void PutSecurityConfig(DataprocClusterClusterConfigSecurityConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putSecurityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig">DataprocClusterClusterConfigSecurityConfig</a>

---

##### `PutSoftwareConfig` <a name="PutSoftwareConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putSoftwareConfig"></a>

```csharp
private void PutSoftwareConfig(DataprocClusterClusterConfigSoftwareConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putSoftwareConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig">DataprocClusterClusterConfigSoftwareConfig</a>

---

##### `PutWorkerConfig` <a name="PutWorkerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putWorkerConfig"></a>

```csharp
private void PutWorkerConfig(DataprocClusterClusterConfigWorkerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putWorkerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig">DataprocClusterClusterConfigWorkerConfig</a>

---

##### `ResetAutoscalingConfig` <a name="ResetAutoscalingConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetAutoscalingConfig"></a>

```csharp
private void ResetAutoscalingConfig()
```

##### `ResetDataprocMetricConfig` <a name="ResetDataprocMetricConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetDataprocMetricConfig"></a>

```csharp
private void ResetDataprocMetricConfig()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetEncryptionConfig"></a>

```csharp
private void ResetEncryptionConfig()
```

##### `ResetEndpointConfig` <a name="ResetEndpointConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetEndpointConfig"></a>

```csharp
private void ResetEndpointConfig()
```

##### `ResetGceClusterConfig` <a name="ResetGceClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetGceClusterConfig"></a>

```csharp
private void ResetGceClusterConfig()
```

##### `ResetInitializationAction` <a name="ResetInitializationAction" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetInitializationAction"></a>

```csharp
private void ResetInitializationAction()
```

##### `ResetLifecycleConfig` <a name="ResetLifecycleConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetLifecycleConfig"></a>

```csharp
private void ResetLifecycleConfig()
```

##### `ResetMasterConfig` <a name="ResetMasterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetMasterConfig"></a>

```csharp
private void ResetMasterConfig()
```

##### `ResetMetastoreConfig` <a name="ResetMetastoreConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetMetastoreConfig"></a>

```csharp
private void ResetMetastoreConfig()
```

##### `ResetPreemptibleWorkerConfig` <a name="ResetPreemptibleWorkerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetPreemptibleWorkerConfig"></a>

```csharp
private void ResetPreemptibleWorkerConfig()
```

##### `ResetSecurityConfig` <a name="ResetSecurityConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetSecurityConfig"></a>

```csharp
private void ResetSecurityConfig()
```

##### `ResetSoftwareConfig` <a name="ResetSoftwareConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetSoftwareConfig"></a>

```csharp
private void ResetSoftwareConfig()
```

##### `ResetStagingBucket` <a name="ResetStagingBucket" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetStagingBucket"></a>

```csharp
private void ResetStagingBucket()
```

##### `ResetTempBucket` <a name="ResetTempBucket" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetTempBucket"></a>

```csharp
private void ResetTempBucket()
```

##### `ResetWorkerConfig` <a name="ResetWorkerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetWorkerConfig"></a>

```csharp
private void ResetWorkerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.autoscalingConfig">AutoscalingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference">DataprocClusterClusterConfigAutoscalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.dataprocMetricConfig">DataprocMetricConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference">DataprocClusterClusterConfigDataprocMetricConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference">DataprocClusterClusterConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.endpointConfig">EndpointConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference">DataprocClusterClusterConfigEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.gceClusterConfig">GceClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference">DataprocClusterClusterConfigGceClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.initializationAction">InitializationAction</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList">DataprocClusterClusterConfigInitializationActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.lifecycleConfig">LifecycleConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference">DataprocClusterClusterConfigLifecycleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.masterConfig">MasterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference">DataprocClusterClusterConfigMasterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.metastoreConfig">MetastoreConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference">DataprocClusterClusterConfigMetastoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.preemptibleWorkerConfig">PreemptibleWorkerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference">DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.securityConfig">SecurityConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference">DataprocClusterClusterConfigSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.softwareConfig">SoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference">DataprocClusterClusterConfigSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.workerConfig">WorkerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference">DataprocClusterClusterConfigWorkerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.autoscalingConfigInput">AutoscalingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig">DataprocClusterClusterConfigAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.dataprocMetricConfigInput">DataprocMetricConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig">DataprocClusterClusterConfigDataprocMetricConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig">DataprocClusterClusterConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.endpointConfigInput">EndpointConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig">DataprocClusterClusterConfigEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.gceClusterConfigInput">GceClusterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig">DataprocClusterClusterConfigGceClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.initializationActionInput">InitializationActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.lifecycleConfigInput">LifecycleConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig">DataprocClusterClusterConfigLifecycleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.masterConfigInput">MasterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig">DataprocClusterClusterConfigMasterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.metastoreConfigInput">MetastoreConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig">DataprocClusterClusterConfigMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.preemptibleWorkerConfigInput">PreemptibleWorkerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig">DataprocClusterClusterConfigPreemptibleWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.securityConfigInput">SecurityConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig">DataprocClusterClusterConfigSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.softwareConfigInput">SoftwareConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig">DataprocClusterClusterConfigSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.stagingBucketInput">StagingBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.tempBucketInput">TempBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.workerConfigInput">WorkerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig">DataprocClusterClusterConfigWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.stagingBucket">StagingBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.tempBucket">TempBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig">DataprocClusterClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoscalingConfig`<sup>Required</sup> <a name="AutoscalingConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.autoscalingConfig"></a>

```csharp
public DataprocClusterClusterConfigAutoscalingConfigOutputReference AutoscalingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference">DataprocClusterClusterConfigAutoscalingConfigOutputReference</a>

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `DataprocMetricConfig`<sup>Required</sup> <a name="DataprocMetricConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.dataprocMetricConfig"></a>

```csharp
public DataprocClusterClusterConfigDataprocMetricConfigOutputReference DataprocMetricConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference">DataprocClusterClusterConfigDataprocMetricConfigOutputReference</a>

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.encryptionConfig"></a>

```csharp
public DataprocClusterClusterConfigEncryptionConfigOutputReference EncryptionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference">DataprocClusterClusterConfigEncryptionConfigOutputReference</a>

---

##### `EndpointConfig`<sup>Required</sup> <a name="EndpointConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.endpointConfig"></a>

```csharp
public DataprocClusterClusterConfigEndpointConfigOutputReference EndpointConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference">DataprocClusterClusterConfigEndpointConfigOutputReference</a>

---

##### `GceClusterConfig`<sup>Required</sup> <a name="GceClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.gceClusterConfig"></a>

```csharp
public DataprocClusterClusterConfigGceClusterConfigOutputReference GceClusterConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference">DataprocClusterClusterConfigGceClusterConfigOutputReference</a>

---

##### `InitializationAction`<sup>Required</sup> <a name="InitializationAction" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.initializationAction"></a>

```csharp
public DataprocClusterClusterConfigInitializationActionList InitializationAction { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList">DataprocClusterClusterConfigInitializationActionList</a>

---

##### `LifecycleConfig`<sup>Required</sup> <a name="LifecycleConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.lifecycleConfig"></a>

```csharp
public DataprocClusterClusterConfigLifecycleConfigOutputReference LifecycleConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference">DataprocClusterClusterConfigLifecycleConfigOutputReference</a>

---

##### `MasterConfig`<sup>Required</sup> <a name="MasterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.masterConfig"></a>

```csharp
public DataprocClusterClusterConfigMasterConfigOutputReference MasterConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference">DataprocClusterClusterConfigMasterConfigOutputReference</a>

---

##### `MetastoreConfig`<sup>Required</sup> <a name="MetastoreConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.metastoreConfig"></a>

```csharp
public DataprocClusterClusterConfigMetastoreConfigOutputReference MetastoreConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference">DataprocClusterClusterConfigMetastoreConfigOutputReference</a>

---

##### `PreemptibleWorkerConfig`<sup>Required</sup> <a name="PreemptibleWorkerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.preemptibleWorkerConfig"></a>

```csharp
public DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference PreemptibleWorkerConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference">DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference</a>

---

##### `SecurityConfig`<sup>Required</sup> <a name="SecurityConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.securityConfig"></a>

```csharp
public DataprocClusterClusterConfigSecurityConfigOutputReference SecurityConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference">DataprocClusterClusterConfigSecurityConfigOutputReference</a>

---

##### `SoftwareConfig`<sup>Required</sup> <a name="SoftwareConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.softwareConfig"></a>

```csharp
public DataprocClusterClusterConfigSoftwareConfigOutputReference SoftwareConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference">DataprocClusterClusterConfigSoftwareConfigOutputReference</a>

---

##### `WorkerConfig`<sup>Required</sup> <a name="WorkerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.workerConfig"></a>

```csharp
public DataprocClusterClusterConfigWorkerConfigOutputReference WorkerConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference">DataprocClusterClusterConfigWorkerConfigOutputReference</a>

---

##### `AutoscalingConfigInput`<sup>Optional</sup> <a name="AutoscalingConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.autoscalingConfigInput"></a>

```csharp
public DataprocClusterClusterConfigAutoscalingConfig AutoscalingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig">DataprocClusterClusterConfigAutoscalingConfig</a>

---

##### `DataprocMetricConfigInput`<sup>Optional</sup> <a name="DataprocMetricConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.dataprocMetricConfigInput"></a>

```csharp
public DataprocClusterClusterConfigDataprocMetricConfig DataprocMetricConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig">DataprocClusterClusterConfigDataprocMetricConfig</a>

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.encryptionConfigInput"></a>

```csharp
public DataprocClusterClusterConfigEncryptionConfig EncryptionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig">DataprocClusterClusterConfigEncryptionConfig</a>

---

##### `EndpointConfigInput`<sup>Optional</sup> <a name="EndpointConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.endpointConfigInput"></a>

```csharp
public DataprocClusterClusterConfigEndpointConfig EndpointConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig">DataprocClusterClusterConfigEndpointConfig</a>

---

##### `GceClusterConfigInput`<sup>Optional</sup> <a name="GceClusterConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.gceClusterConfigInput"></a>

```csharp
public DataprocClusterClusterConfigGceClusterConfig GceClusterConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig">DataprocClusterClusterConfigGceClusterConfig</a>

---

##### `InitializationActionInput`<sup>Optional</sup> <a name="InitializationActionInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.initializationActionInput"></a>

```csharp
public object InitializationActionInput { get; }
```

- *Type:* object

---

##### `LifecycleConfigInput`<sup>Optional</sup> <a name="LifecycleConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.lifecycleConfigInput"></a>

```csharp
public DataprocClusterClusterConfigLifecycleConfig LifecycleConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig">DataprocClusterClusterConfigLifecycleConfig</a>

---

##### `MasterConfigInput`<sup>Optional</sup> <a name="MasterConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.masterConfigInput"></a>

```csharp
public DataprocClusterClusterConfigMasterConfig MasterConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig">DataprocClusterClusterConfigMasterConfig</a>

---

##### `MetastoreConfigInput`<sup>Optional</sup> <a name="MetastoreConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.metastoreConfigInput"></a>

```csharp
public DataprocClusterClusterConfigMetastoreConfig MetastoreConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig">DataprocClusterClusterConfigMetastoreConfig</a>

---

##### `PreemptibleWorkerConfigInput`<sup>Optional</sup> <a name="PreemptibleWorkerConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.preemptibleWorkerConfigInput"></a>

```csharp
public DataprocClusterClusterConfigPreemptibleWorkerConfig PreemptibleWorkerConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig">DataprocClusterClusterConfigPreemptibleWorkerConfig</a>

---

##### `SecurityConfigInput`<sup>Optional</sup> <a name="SecurityConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.securityConfigInput"></a>

```csharp
public DataprocClusterClusterConfigSecurityConfig SecurityConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig">DataprocClusterClusterConfigSecurityConfig</a>

---

##### `SoftwareConfigInput`<sup>Optional</sup> <a name="SoftwareConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.softwareConfigInput"></a>

```csharp
public DataprocClusterClusterConfigSoftwareConfig SoftwareConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig">DataprocClusterClusterConfigSoftwareConfig</a>

---

##### `StagingBucketInput`<sup>Optional</sup> <a name="StagingBucketInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.stagingBucketInput"></a>

```csharp
public string StagingBucketInput { get; }
```

- *Type:* string

---

##### `TempBucketInput`<sup>Optional</sup> <a name="TempBucketInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.tempBucketInput"></a>

```csharp
public string TempBucketInput { get; }
```

- *Type:* string

---

##### `WorkerConfigInput`<sup>Optional</sup> <a name="WorkerConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.workerConfigInput"></a>

```csharp
public DataprocClusterClusterConfigWorkerConfig WorkerConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig">DataprocClusterClusterConfigWorkerConfig</a>

---

##### `StagingBucket`<sup>Required</sup> <a name="StagingBucket" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.stagingBucket"></a>

```csharp
public string StagingBucket { get; }
```

- *Type:* string

---

##### `TempBucket`<sup>Required</sup> <a name="TempBucket" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.tempBucket"></a>

```csharp
public string TempBucket { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterClusterConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig">DataprocClusterClusterConfig</a>

---


### DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference <a name="DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.resetBootDiskSizeGb">ResetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.resetBootDiskType">ResetBootDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.resetNumLocalSsds">ResetNumLocalSsds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBootDiskSizeGb` <a name="ResetBootDiskSizeGb" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.resetBootDiskSizeGb"></a>

```csharp
private void ResetBootDiskSizeGb()
```

##### `ResetBootDiskType` <a name="ResetBootDiskType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.resetBootDiskType"></a>

```csharp
private void ResetBootDiskType()
```

##### `ResetNumLocalSsds` <a name="ResetNumLocalSsds" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.resetNumLocalSsds"></a>

```csharp
private void ResetNumLocalSsds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.bootDiskSizeGbInput">BootDiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.bootDiskTypeInput">BootDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.numLocalSsdsInput">NumLocalSsdsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.bootDiskType">BootDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.numLocalSsds">NumLocalSsds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig">DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BootDiskSizeGbInput`<sup>Optional</sup> <a name="BootDiskSizeGbInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.bootDiskSizeGbInput"></a>

```csharp
public double BootDiskSizeGbInput { get; }
```

- *Type:* double

---

##### `BootDiskTypeInput`<sup>Optional</sup> <a name="BootDiskTypeInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.bootDiskTypeInput"></a>

```csharp
public string BootDiskTypeInput { get; }
```

- *Type:* string

---

##### `NumLocalSsdsInput`<sup>Optional</sup> <a name="NumLocalSsdsInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.numLocalSsdsInput"></a>

```csharp
public double NumLocalSsdsInput { get; }
```

- *Type:* double

---

##### `BootDiskSizeGb`<sup>Required</sup> <a name="BootDiskSizeGb" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; }
```

- *Type:* double

---

##### `BootDiskType`<sup>Required</sup> <a name="BootDiskType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.bootDiskType"></a>

```csharp
public string BootDiskType { get; }
```

- *Type:* string

---

##### `NumLocalSsds`<sup>Required</sup> <a name="NumLocalSsds" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.numLocalSsds"></a>

```csharp
public double NumLocalSsds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig">DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig</a>

---


### DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference <a name="DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.putDiskConfig">PutDiskConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.resetDiskConfig">ResetDiskConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.resetNumInstances">ResetNumInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.resetPreemptibility">ResetPreemptibility</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDiskConfig` <a name="PutDiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.putDiskConfig"></a>

```csharp
private void PutDiskConfig(DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.putDiskConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig">DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig</a>

---

##### `ResetDiskConfig` <a name="ResetDiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.resetDiskConfig"></a>

```csharp
private void ResetDiskConfig()
```

##### `ResetNumInstances` <a name="ResetNumInstances" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.resetNumInstances"></a>

```csharp
private void ResetNumInstances()
```

##### `ResetPreemptibility` <a name="ResetPreemptibility" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.resetPreemptibility"></a>

```csharp
private void ResetPreemptibility()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.diskConfig">DiskConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference">DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.instanceNames">InstanceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.diskConfigInput">DiskConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig">DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.numInstancesInput">NumInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.preemptibilityInput">PreemptibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.numInstances">NumInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.preemptibility">Preemptibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig">DataprocClusterClusterConfigPreemptibleWorkerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskConfig`<sup>Required</sup> <a name="DiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.diskConfig"></a>

```csharp
public DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference DiskConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference">DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference</a>

---

##### `InstanceNames`<sup>Required</sup> <a name="InstanceNames" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.instanceNames"></a>

```csharp
public string[] InstanceNames { get; }
```

- *Type:* string[]

---

##### `DiskConfigInput`<sup>Optional</sup> <a name="DiskConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.diskConfigInput"></a>

```csharp
public DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig DiskConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig">DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig</a>

---

##### `NumInstancesInput`<sup>Optional</sup> <a name="NumInstancesInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.numInstancesInput"></a>

```csharp
public double NumInstancesInput { get; }
```

- *Type:* double

---

##### `PreemptibilityInput`<sup>Optional</sup> <a name="PreemptibilityInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.preemptibilityInput"></a>

```csharp
public string PreemptibilityInput { get; }
```

- *Type:* string

---

##### `NumInstances`<sup>Required</sup> <a name="NumInstances" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.numInstances"></a>

```csharp
public double NumInstances { get; }
```

- *Type:* double

---

##### `Preemptibility`<sup>Required</sup> <a name="Preemptibility" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.preemptibility"></a>

```csharp
public string Preemptibility { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterClusterConfigPreemptibleWorkerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig">DataprocClusterClusterConfigPreemptibleWorkerConfig</a>

---


### DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference <a name="DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetCrossRealmTrustAdminServer">ResetCrossRealmTrustAdminServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetCrossRealmTrustKdc">ResetCrossRealmTrustKdc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetCrossRealmTrustRealm">ResetCrossRealmTrustRealm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetCrossRealmTrustSharedPasswordUri">ResetCrossRealmTrustSharedPasswordUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetEnableKerberos">ResetEnableKerberos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetKdcDbKeyUri">ResetKdcDbKeyUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetKeyPasswordUri">ResetKeyPasswordUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetKeystorePasswordUri">ResetKeystorePasswordUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetKeystoreUri">ResetKeystoreUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetRealm">ResetRealm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetTgtLifetimeHours">ResetTgtLifetimeHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetTruststorePasswordUri">ResetTruststorePasswordUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetTruststoreUri">ResetTruststoreUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCrossRealmTrustAdminServer` <a name="ResetCrossRealmTrustAdminServer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetCrossRealmTrustAdminServer"></a>

```csharp
private void ResetCrossRealmTrustAdminServer()
```

##### `ResetCrossRealmTrustKdc` <a name="ResetCrossRealmTrustKdc" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetCrossRealmTrustKdc"></a>

```csharp
private void ResetCrossRealmTrustKdc()
```

##### `ResetCrossRealmTrustRealm` <a name="ResetCrossRealmTrustRealm" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetCrossRealmTrustRealm"></a>

```csharp
private void ResetCrossRealmTrustRealm()
```

##### `ResetCrossRealmTrustSharedPasswordUri` <a name="ResetCrossRealmTrustSharedPasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetCrossRealmTrustSharedPasswordUri"></a>

```csharp
private void ResetCrossRealmTrustSharedPasswordUri()
```

##### `ResetEnableKerberos` <a name="ResetEnableKerberos" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetEnableKerberos"></a>

```csharp
private void ResetEnableKerberos()
```

##### `ResetKdcDbKeyUri` <a name="ResetKdcDbKeyUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetKdcDbKeyUri"></a>

```csharp
private void ResetKdcDbKeyUri()
```

##### `ResetKeyPasswordUri` <a name="ResetKeyPasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetKeyPasswordUri"></a>

```csharp
private void ResetKeyPasswordUri()
```

##### `ResetKeystorePasswordUri` <a name="ResetKeystorePasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetKeystorePasswordUri"></a>

```csharp
private void ResetKeystorePasswordUri()
```

##### `ResetKeystoreUri` <a name="ResetKeystoreUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetKeystoreUri"></a>

```csharp
private void ResetKeystoreUri()
```

##### `ResetRealm` <a name="ResetRealm" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetRealm"></a>

```csharp
private void ResetRealm()
```

##### `ResetTgtLifetimeHours` <a name="ResetTgtLifetimeHours" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetTgtLifetimeHours"></a>

```csharp
private void ResetTgtLifetimeHours()
```

##### `ResetTruststorePasswordUri` <a name="ResetTruststorePasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetTruststorePasswordUri"></a>

```csharp
private void ResetTruststorePasswordUri()
```

##### `ResetTruststoreUri` <a name="ResetTruststoreUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetTruststoreUri"></a>

```csharp
private void ResetTruststoreUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustAdminServerInput">CrossRealmTrustAdminServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustKdcInput">CrossRealmTrustKdcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustRealmInput">CrossRealmTrustRealmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustSharedPasswordUriInput">CrossRealmTrustSharedPasswordUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.enableKerberosInput">EnableKerberosInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.kdcDbKeyUriInput">KdcDbKeyUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keyPasswordUriInput">KeyPasswordUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keystorePasswordUriInput">KeystorePasswordUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keystoreUriInput">KeystoreUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.kmsKeyUriInput">KmsKeyUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.realmInput">RealmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.rootPrincipalPasswordUriInput">RootPrincipalPasswordUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.tgtLifetimeHoursInput">TgtLifetimeHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.truststorePasswordUriInput">TruststorePasswordUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.truststoreUriInput">TruststoreUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustAdminServer">CrossRealmTrustAdminServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustKdc">CrossRealmTrustKdc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustRealm">CrossRealmTrustRealm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustSharedPasswordUri">CrossRealmTrustSharedPasswordUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.enableKerberos">EnableKerberos</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.kdcDbKeyUri">KdcDbKeyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keyPasswordUri">KeyPasswordUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keystorePasswordUri">KeystorePasswordUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keystoreUri">KeystoreUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.kmsKeyUri">KmsKeyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.realm">Realm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.rootPrincipalPasswordUri">RootPrincipalPasswordUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.tgtLifetimeHours">TgtLifetimeHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.truststorePasswordUri">TruststorePasswordUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.truststoreUri">TruststoreUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig">DataprocClusterClusterConfigSecurityConfigKerberosConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrossRealmTrustAdminServerInput`<sup>Optional</sup> <a name="CrossRealmTrustAdminServerInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustAdminServerInput"></a>

```csharp
public string CrossRealmTrustAdminServerInput { get; }
```

- *Type:* string

---

##### `CrossRealmTrustKdcInput`<sup>Optional</sup> <a name="CrossRealmTrustKdcInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustKdcInput"></a>

```csharp
public string CrossRealmTrustKdcInput { get; }
```

- *Type:* string

---

##### `CrossRealmTrustRealmInput`<sup>Optional</sup> <a name="CrossRealmTrustRealmInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustRealmInput"></a>

```csharp
public string CrossRealmTrustRealmInput { get; }
```

- *Type:* string

---

##### `CrossRealmTrustSharedPasswordUriInput`<sup>Optional</sup> <a name="CrossRealmTrustSharedPasswordUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustSharedPasswordUriInput"></a>

```csharp
public string CrossRealmTrustSharedPasswordUriInput { get; }
```

- *Type:* string

---

##### `EnableKerberosInput`<sup>Optional</sup> <a name="EnableKerberosInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.enableKerberosInput"></a>

```csharp
public object EnableKerberosInput { get; }
```

- *Type:* object

---

##### `KdcDbKeyUriInput`<sup>Optional</sup> <a name="KdcDbKeyUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.kdcDbKeyUriInput"></a>

```csharp
public string KdcDbKeyUriInput { get; }
```

- *Type:* string

---

##### `KeyPasswordUriInput`<sup>Optional</sup> <a name="KeyPasswordUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keyPasswordUriInput"></a>

```csharp
public string KeyPasswordUriInput { get; }
```

- *Type:* string

---

##### `KeystorePasswordUriInput`<sup>Optional</sup> <a name="KeystorePasswordUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keystorePasswordUriInput"></a>

```csharp
public string KeystorePasswordUriInput { get; }
```

- *Type:* string

---

##### `KeystoreUriInput`<sup>Optional</sup> <a name="KeystoreUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keystoreUriInput"></a>

```csharp
public string KeystoreUriInput { get; }
```

- *Type:* string

---

##### `KmsKeyUriInput`<sup>Optional</sup> <a name="KmsKeyUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.kmsKeyUriInput"></a>

```csharp
public string KmsKeyUriInput { get; }
```

- *Type:* string

---

##### `RealmInput`<sup>Optional</sup> <a name="RealmInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.realmInput"></a>

```csharp
public string RealmInput { get; }
```

- *Type:* string

---

##### `RootPrincipalPasswordUriInput`<sup>Optional</sup> <a name="RootPrincipalPasswordUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.rootPrincipalPasswordUriInput"></a>

```csharp
public string RootPrincipalPasswordUriInput { get; }
```

- *Type:* string

---

##### `TgtLifetimeHoursInput`<sup>Optional</sup> <a name="TgtLifetimeHoursInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.tgtLifetimeHoursInput"></a>

```csharp
public double TgtLifetimeHoursInput { get; }
```

- *Type:* double

---

##### `TruststorePasswordUriInput`<sup>Optional</sup> <a name="TruststorePasswordUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.truststorePasswordUriInput"></a>

```csharp
public string TruststorePasswordUriInput { get; }
```

- *Type:* string

---

##### `TruststoreUriInput`<sup>Optional</sup> <a name="TruststoreUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.truststoreUriInput"></a>

```csharp
public string TruststoreUriInput { get; }
```

- *Type:* string

---

##### `CrossRealmTrustAdminServer`<sup>Required</sup> <a name="CrossRealmTrustAdminServer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustAdminServer"></a>

```csharp
public string CrossRealmTrustAdminServer { get; }
```

- *Type:* string

---

##### `CrossRealmTrustKdc`<sup>Required</sup> <a name="CrossRealmTrustKdc" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustKdc"></a>

```csharp
public string CrossRealmTrustKdc { get; }
```

- *Type:* string

---

##### `CrossRealmTrustRealm`<sup>Required</sup> <a name="CrossRealmTrustRealm" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustRealm"></a>

```csharp
public string CrossRealmTrustRealm { get; }
```

- *Type:* string

---

##### `CrossRealmTrustSharedPasswordUri`<sup>Required</sup> <a name="CrossRealmTrustSharedPasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustSharedPasswordUri"></a>

```csharp
public string CrossRealmTrustSharedPasswordUri { get; }
```

- *Type:* string

---

##### `EnableKerberos`<sup>Required</sup> <a name="EnableKerberos" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.enableKerberos"></a>

```csharp
public object EnableKerberos { get; }
```

- *Type:* object

---

##### `KdcDbKeyUri`<sup>Required</sup> <a name="KdcDbKeyUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.kdcDbKeyUri"></a>

```csharp
public string KdcDbKeyUri { get; }
```

- *Type:* string

---

##### `KeyPasswordUri`<sup>Required</sup> <a name="KeyPasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keyPasswordUri"></a>

```csharp
public string KeyPasswordUri { get; }
```

- *Type:* string

---

##### `KeystorePasswordUri`<sup>Required</sup> <a name="KeystorePasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keystorePasswordUri"></a>

```csharp
public string KeystorePasswordUri { get; }
```

- *Type:* string

---

##### `KeystoreUri`<sup>Required</sup> <a name="KeystoreUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keystoreUri"></a>

```csharp
public string KeystoreUri { get; }
```

- *Type:* string

---

##### `KmsKeyUri`<sup>Required</sup> <a name="KmsKeyUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.kmsKeyUri"></a>

```csharp
public string KmsKeyUri { get; }
```

- *Type:* string

---

##### `Realm`<sup>Required</sup> <a name="Realm" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.realm"></a>

```csharp
public string Realm { get; }
```

- *Type:* string

---

##### `RootPrincipalPasswordUri`<sup>Required</sup> <a name="RootPrincipalPasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.rootPrincipalPasswordUri"></a>

```csharp
public string RootPrincipalPasswordUri { get; }
```

- *Type:* string

---

##### `TgtLifetimeHours`<sup>Required</sup> <a name="TgtLifetimeHours" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.tgtLifetimeHours"></a>

```csharp
public double TgtLifetimeHours { get; }
```

- *Type:* double

---

##### `TruststorePasswordUri`<sup>Required</sup> <a name="TruststorePasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.truststorePasswordUri"></a>

```csharp
public string TruststorePasswordUri { get; }
```

- *Type:* string

---

##### `TruststoreUri`<sup>Required</sup> <a name="TruststoreUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.truststoreUri"></a>

```csharp
public string TruststoreUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterClusterConfigSecurityConfigKerberosConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig">DataprocClusterClusterConfigSecurityConfigKerberosConfig</a>

---


### DataprocClusterClusterConfigSecurityConfigOutputReference <a name="DataprocClusterClusterConfigSecurityConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigSecurityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.putKerberosConfig">PutKerberosConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKerberosConfig` <a name="PutKerberosConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.putKerberosConfig"></a>

```csharp
private void PutKerberosConfig(DataprocClusterClusterConfigSecurityConfigKerberosConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.putKerberosConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig">DataprocClusterClusterConfigSecurityConfigKerberosConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.property.kerberosConfig">KerberosConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference">DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.property.kerberosConfigInput">KerberosConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig">DataprocClusterClusterConfigSecurityConfigKerberosConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig">DataprocClusterClusterConfigSecurityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KerberosConfig`<sup>Required</sup> <a name="KerberosConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.property.kerberosConfig"></a>

```csharp
public DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference KerberosConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference">DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference</a>

---

##### `KerberosConfigInput`<sup>Optional</sup> <a name="KerberosConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.property.kerberosConfigInput"></a>

```csharp
public DataprocClusterClusterConfigSecurityConfigKerberosConfig KerberosConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig">DataprocClusterClusterConfigSecurityConfigKerberosConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterClusterConfigSecurityConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig">DataprocClusterClusterConfigSecurityConfig</a>

---


### DataprocClusterClusterConfigSoftwareConfigOutputReference <a name="DataprocClusterClusterConfigSoftwareConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigSoftwareConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.resetImageVersion">ResetImageVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.resetOptionalComponents">ResetOptionalComponents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.resetOverrideProperties">ResetOverrideProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageVersion` <a name="ResetImageVersion" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.resetImageVersion"></a>

```csharp
private void ResetImageVersion()
```

##### `ResetOptionalComponents` <a name="ResetOptionalComponents" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.resetOptionalComponents"></a>

```csharp
private void ResetOptionalComponents()
```

##### `ResetOverrideProperties` <a name="ResetOverrideProperties" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.resetOverrideProperties"></a>

```csharp
private void ResetOverrideProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.properties">Properties</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.imageVersionInput">ImageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.optionalComponentsInput">OptionalComponentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.overridePropertiesInput">OverridePropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.imageVersion">ImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.optionalComponents">OptionalComponents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.overrideProperties">OverrideProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig">DataprocClusterClusterConfigSoftwareConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.properties"></a>

```csharp
public StringMap Properties { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ImageVersionInput`<sup>Optional</sup> <a name="ImageVersionInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.imageVersionInput"></a>

```csharp
public string ImageVersionInput { get; }
```

- *Type:* string

---

##### `OptionalComponentsInput`<sup>Optional</sup> <a name="OptionalComponentsInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.optionalComponentsInput"></a>

```csharp
public string[] OptionalComponentsInput { get; }
```

- *Type:* string[]

---

##### `OverridePropertiesInput`<sup>Optional</sup> <a name="OverridePropertiesInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.overridePropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OverridePropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ImageVersion`<sup>Required</sup> <a name="ImageVersion" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.imageVersion"></a>

```csharp
public string ImageVersion { get; }
```

- *Type:* string

---

##### `OptionalComponents`<sup>Required</sup> <a name="OptionalComponents" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.optionalComponents"></a>

```csharp
public string[] OptionalComponents { get; }
```

- *Type:* string[]

---

##### `OverrideProperties`<sup>Required</sup> <a name="OverrideProperties" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.overrideProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OverrideProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterClusterConfigSoftwareConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig">DataprocClusterClusterConfigSoftwareConfig</a>

---


### DataprocClusterClusterConfigWorkerConfigAcceleratorsList <a name="DataprocClusterClusterConfigWorkerConfigAcceleratorsList" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigWorkerConfigAcceleratorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.get"></a>

```csharp
private DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference <a name="DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.acceleratorCountInput"></a>

```csharp
public double AcceleratorCountInput { get; }
```

- *Type:* double

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```csharp
public string AcceleratorTypeInput { get; }
```

- *Type:* string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; }
```

- *Type:* double

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference <a name="DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.resetBootDiskSizeGb">ResetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.resetBootDiskType">ResetBootDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.resetNumLocalSsds">ResetNumLocalSsds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBootDiskSizeGb` <a name="ResetBootDiskSizeGb" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.resetBootDiskSizeGb"></a>

```csharp
private void ResetBootDiskSizeGb()
```

##### `ResetBootDiskType` <a name="ResetBootDiskType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.resetBootDiskType"></a>

```csharp
private void ResetBootDiskType()
```

##### `ResetNumLocalSsds` <a name="ResetNumLocalSsds" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.resetNumLocalSsds"></a>

```csharp
private void ResetNumLocalSsds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.bootDiskSizeGbInput">BootDiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.bootDiskTypeInput">BootDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.numLocalSsdsInput">NumLocalSsdsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.bootDiskType">BootDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.numLocalSsds">NumLocalSsds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig">DataprocClusterClusterConfigWorkerConfigDiskConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BootDiskSizeGbInput`<sup>Optional</sup> <a name="BootDiskSizeGbInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.bootDiskSizeGbInput"></a>

```csharp
public double BootDiskSizeGbInput { get; }
```

- *Type:* double

---

##### `BootDiskTypeInput`<sup>Optional</sup> <a name="BootDiskTypeInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.bootDiskTypeInput"></a>

```csharp
public string BootDiskTypeInput { get; }
```

- *Type:* string

---

##### `NumLocalSsdsInput`<sup>Optional</sup> <a name="NumLocalSsdsInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.numLocalSsdsInput"></a>

```csharp
public double NumLocalSsdsInput { get; }
```

- *Type:* double

---

##### `BootDiskSizeGb`<sup>Required</sup> <a name="BootDiskSizeGb" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; }
```

- *Type:* double

---

##### `BootDiskType`<sup>Required</sup> <a name="BootDiskType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.bootDiskType"></a>

```csharp
public string BootDiskType { get; }
```

- *Type:* string

---

##### `NumLocalSsds`<sup>Required</sup> <a name="NumLocalSsds" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.numLocalSsds"></a>

```csharp
public double NumLocalSsds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterClusterConfigWorkerConfigDiskConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig">DataprocClusterClusterConfigWorkerConfigDiskConfig</a>

---


### DataprocClusterClusterConfigWorkerConfigOutputReference <a name="DataprocClusterClusterConfigWorkerConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterClusterConfigWorkerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.putAccelerators">PutAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.putDiskConfig">PutDiskConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetAccelerators">ResetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetDiskConfig">ResetDiskConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetImageUri">ResetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetMinCpuPlatform">ResetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetNumInstances">ResetNumInstances</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccelerators` <a name="PutAccelerators" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.putAccelerators"></a>

```csharp
private void PutAccelerators(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.putAccelerators.parameter.value"></a>

- *Type:* object

---

##### `PutDiskConfig` <a name="PutDiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.putDiskConfig"></a>

```csharp
private void PutDiskConfig(DataprocClusterClusterConfigWorkerConfigDiskConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.putDiskConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig">DataprocClusterClusterConfigWorkerConfigDiskConfig</a>

---

##### `ResetAccelerators` <a name="ResetAccelerators" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetAccelerators"></a>

```csharp
private void ResetAccelerators()
```

##### `ResetDiskConfig` <a name="ResetDiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetDiskConfig"></a>

```csharp
private void ResetDiskConfig()
```

##### `ResetImageUri` <a name="ResetImageUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetImageUri"></a>

```csharp
private void ResetImageUri()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetMachineType"></a>

```csharp
private void ResetMachineType()
```

##### `ResetMinCpuPlatform` <a name="ResetMinCpuPlatform" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetMinCpuPlatform"></a>

```csharp
private void ResetMinCpuPlatform()
```

##### `ResetNumInstances` <a name="ResetNumInstances" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetNumInstances"></a>

```csharp
private void ResetNumInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.accelerators">Accelerators</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList">DataprocClusterClusterConfigWorkerConfigAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.diskConfig">DiskConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference">DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.instanceNames">InstanceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.acceleratorsInput">AcceleratorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.diskConfigInput">DiskConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig">DataprocClusterClusterConfigWorkerConfigDiskConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.minCpuPlatformInput">MinCpuPlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.numInstancesInput">NumInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.numInstances">NumInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig">DataprocClusterClusterConfigWorkerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Accelerators`<sup>Required</sup> <a name="Accelerators" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.accelerators"></a>

```csharp
public DataprocClusterClusterConfigWorkerConfigAcceleratorsList Accelerators { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList">DataprocClusterClusterConfigWorkerConfigAcceleratorsList</a>

---

##### `DiskConfig`<sup>Required</sup> <a name="DiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.diskConfig"></a>

```csharp
public DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference DiskConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference">DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference</a>

---

##### `InstanceNames`<sup>Required</sup> <a name="InstanceNames" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.instanceNames"></a>

```csharp
public string[] InstanceNames { get; }
```

- *Type:* string[]

---

##### `AcceleratorsInput`<sup>Optional</sup> <a name="AcceleratorsInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.acceleratorsInput"></a>

```csharp
public object AcceleratorsInput { get; }
```

- *Type:* object

---

##### `DiskConfigInput`<sup>Optional</sup> <a name="DiskConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.diskConfigInput"></a>

```csharp
public DataprocClusterClusterConfigWorkerConfigDiskConfig DiskConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig">DataprocClusterClusterConfigWorkerConfigDiskConfig</a>

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.imageUriInput"></a>

```csharp
public string ImageUriInput { get; }
```

- *Type:* string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `MinCpuPlatformInput`<sup>Optional</sup> <a name="MinCpuPlatformInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.minCpuPlatformInput"></a>

```csharp
public string MinCpuPlatformInput { get; }
```

- *Type:* string

---

##### `NumInstancesInput`<sup>Optional</sup> <a name="NumInstancesInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.numInstancesInput"></a>

```csharp
public double NumInstancesInput { get; }
```

- *Type:* double

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `MinCpuPlatform`<sup>Required</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.minCpuPlatform"></a>

```csharp
public string MinCpuPlatform { get; }
```

- *Type:* string

---

##### `NumInstances`<sup>Required</sup> <a name="NumInstances" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.numInstances"></a>

```csharp
public double NumInstances { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterClusterConfigWorkerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig">DataprocClusterClusterConfigWorkerConfig</a>

---


### DataprocClusterTimeoutsOutputReference <a name="DataprocClusterTimeoutsOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference <a name="DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.resetDataprocMetastoreService">ResetDataprocMetastoreService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataprocMetastoreService` <a name="ResetDataprocMetastoreService" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.resetDataprocMetastoreService"></a>

```csharp
private void ResetDataprocMetastoreService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.property.dataprocMetastoreServiceInput">DataprocMetastoreServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.property.dataprocMetastoreService">DataprocMetastoreService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataprocMetastoreServiceInput`<sup>Optional</sup> <a name="DataprocMetastoreServiceInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.property.dataprocMetastoreServiceInput"></a>

```csharp
public string DataprocMetastoreServiceInput { get; }
```

- *Type:* string

---

##### `DataprocMetastoreService`<sup>Required</sup> <a name="DataprocMetastoreService" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.property.dataprocMetastoreService"></a>

```csharp
public string DataprocMetastoreService { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig</a>

---


### DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference <a name="DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.putMetastoreConfig">PutMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.putSparkHistoryServerConfig">PutSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.resetMetastoreConfig">ResetMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.resetSparkHistoryServerConfig">ResetSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetastoreConfig` <a name="PutMetastoreConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.putMetastoreConfig"></a>

```csharp
private void PutMetastoreConfig(DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.putMetastoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig</a>

---

##### `PutSparkHistoryServerConfig` <a name="PutSparkHistoryServerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.putSparkHistoryServerConfig"></a>

```csharp
private void PutSparkHistoryServerConfig(DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.putSparkHistoryServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig</a>

---

##### `ResetMetastoreConfig` <a name="ResetMetastoreConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.resetMetastoreConfig"></a>

```csharp
private void ResetMetastoreConfig()
```

##### `ResetSparkHistoryServerConfig` <a name="ResetSparkHistoryServerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.resetSparkHistoryServerConfig"></a>

```csharp
private void ResetSparkHistoryServerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.metastoreConfig">MetastoreConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.sparkHistoryServerConfig">SparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.metastoreConfigInput">MetastoreConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.sparkHistoryServerConfigInput">SparkHistoryServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetastoreConfig`<sup>Required</sup> <a name="MetastoreConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.metastoreConfig"></a>

```csharp
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference MetastoreConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference</a>

---

##### `SparkHistoryServerConfig`<sup>Required</sup> <a name="SparkHistoryServerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.sparkHistoryServerConfig"></a>

```csharp
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference SparkHistoryServerConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference</a>

---

##### `MetastoreConfigInput`<sup>Optional</sup> <a name="MetastoreConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.metastoreConfigInput"></a>

```csharp
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig MetastoreConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig</a>

---

##### `SparkHistoryServerConfigInput`<sup>Optional</sup> <a name="SparkHistoryServerConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.sparkHistoryServerConfigInput"></a>

```csharp
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig SparkHistoryServerConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig</a>

---


### DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference <a name="DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster">ResetDataprocCluster</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataprocCluster` <a name="ResetDataprocCluster" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster"></a>

```csharp
private void ResetDataprocCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput">DataprocClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster">DataprocCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataprocClusterInput`<sup>Optional</sup> <a name="DataprocClusterInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput"></a>

```csharp
public string DataprocClusterInput { get; }
```

- *Type:* string

---

##### `DataprocCluster`<sup>Required</sup> <a name="DataprocCluster" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster"></a>

```csharp
public string DataprocCluster { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig</a>

---


### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.get"></a>

```csharp
private DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.resetMaxNodeCount">ResetMaxNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.resetMinNodeCount">ResetMinNodeCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxNodeCount` <a name="ResetMaxNodeCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.resetMaxNodeCount"></a>

```csharp
private void ResetMaxNodeCount()
```

##### `ResetMinNodeCount` <a name="ResetMinNodeCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.resetMinNodeCount"></a>

```csharp
private void ResetMinNodeCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.maxNodeCountInput">MaxNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.minNodeCountInput">MinNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.minNodeCount">MinNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxNodeCountInput`<sup>Optional</sup> <a name="MaxNodeCountInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.maxNodeCountInput"></a>

```csharp
public double MaxNodeCountInput { get; }
```

- *Type:* double

---

##### `MinNodeCountInput`<sup>Optional</sup> <a name="MinNodeCountInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.minNodeCountInput"></a>

```csharp
public double MinNodeCountInput { get; }
```

- *Type:* double

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; }
```

- *Type:* double

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.minNodeCount"></a>

```csharp
public double MinNodeCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling</a>

---


### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resetLocalSsdCount">ResetLocalSsdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resetMinCpuPlatform">ResetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resetPreemptible">ResetPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resetSpot">ResetSpot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocalSsdCount` <a name="ResetLocalSsdCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resetLocalSsdCount"></a>

```csharp
private void ResetLocalSsdCount()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resetMachineType"></a>

```csharp
private void ResetMachineType()
```

##### `ResetMinCpuPlatform` <a name="ResetMinCpuPlatform" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resetMinCpuPlatform"></a>

```csharp
private void ResetMinCpuPlatform()
```

##### `ResetPreemptible` <a name="ResetPreemptible" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resetPreemptible"></a>

```csharp
private void ResetPreemptible()
```

##### `ResetSpot` <a name="ResetSpot" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resetSpot"></a>

```csharp
private void ResetSpot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.localSsdCountInput">LocalSsdCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.minCpuPlatformInput">MinCpuPlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.preemptibleInput">PreemptibleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.spotInput">SpotInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.localSsdCount">LocalSsdCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.preemptible">Preemptible</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.spot">Spot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalSsdCountInput`<sup>Optional</sup> <a name="LocalSsdCountInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.localSsdCountInput"></a>

```csharp
public double LocalSsdCountInput { get; }
```

- *Type:* double

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `MinCpuPlatformInput`<sup>Optional</sup> <a name="MinCpuPlatformInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.minCpuPlatformInput"></a>

```csharp
public string MinCpuPlatformInput { get; }
```

- *Type:* string

---

##### `PreemptibleInput`<sup>Optional</sup> <a name="PreemptibleInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.preemptibleInput"></a>

```csharp
public object PreemptibleInput { get; }
```

- *Type:* object

---

##### `SpotInput`<sup>Optional</sup> <a name="SpotInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.spotInput"></a>

```csharp
public object SpotInput { get; }
```

- *Type:* object

---

##### `LocalSsdCount`<sup>Required</sup> <a name="LocalSsdCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.localSsdCount"></a>

```csharp
public double LocalSsdCount { get; }
```

- *Type:* double

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `MinCpuPlatform`<sup>Required</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.minCpuPlatform"></a>

```csharp
public string MinCpuPlatform { get; }
```

- *Type:* string

---

##### `Preemptible`<sup>Required</sup> <a name="Preemptible" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.preemptible"></a>

```csharp
public object Preemptible { get; }
```

- *Type:* object

---

##### `Spot`<sup>Required</sup> <a name="Spot" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.spot"></a>

```csharp
public object Spot { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig</a>

---


### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.putAutoscaling">PutAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.resetAutoscaling">ResetAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscaling` <a name="PutAutoscaling" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.putAutoscaling"></a>

```csharp
private void PutAutoscaling(DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.putAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling</a>

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.putConfig"></a>

```csharp
private void PutConfig(DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig</a>

---

##### `ResetAutoscaling` <a name="ResetAutoscaling" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.resetAutoscaling"></a>

```csharp
private void ResetAutoscaling()
```

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.resetConfig"></a>

```csharp
private void ResetConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.autoscaling">Autoscaling</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.autoscalingInput">AutoscalingInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.locationsInput">LocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Autoscaling`<sup>Required</sup> <a name="Autoscaling" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.autoscaling"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference Autoscaling { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference</a>

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.config"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference</a>

---

##### `AutoscalingInput`<sup>Optional</sup> <a name="AutoscalingInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.autoscalingInput"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling AutoscalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.configInput"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig</a>

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.locationsInput"></a>

```csharp
public string[] LocationsInput { get; }
```

- *Type:* string[]

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig</a>

---


### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.putNodePoolConfig">PutNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.resetNodePoolConfig">ResetNodePoolConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodePoolConfig` <a name="PutNodePoolConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.putNodePoolConfig"></a>

```csharp
private void PutNodePoolConfig(DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.putNodePoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig</a>

---

##### `ResetNodePoolConfig` <a name="ResetNodePoolConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.resetNodePoolConfig"></a>

```csharp
private void ResetNodePoolConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.nodePoolConfig">NodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.nodePoolConfigInput">NodePoolConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.nodePoolInput">NodePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.rolesInput">RolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.nodePool">NodePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.roles">Roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodePoolConfig`<sup>Required</sup> <a name="NodePoolConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.nodePoolConfig"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference NodePoolConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference</a>

---

##### `NodePoolConfigInput`<sup>Optional</sup> <a name="NodePoolConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.nodePoolConfigInput"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig NodePoolConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig</a>

---

##### `NodePoolInput`<sup>Optional</sup> <a name="NodePoolInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.nodePoolInput"></a>

```csharp
public string NodePoolInput { get; }
```

- *Type:* string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.rolesInput"></a>

```csharp
public string[] RolesInput { get; }
```

- *Type:* string[]

---

##### `NodePool`<sup>Required</sup> <a name="NodePool" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.nodePool"></a>

```csharp
public string NodePool { get; }
```

- *Type:* string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.roles"></a>

```csharp
public string[] Roles { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.putNodePoolTarget">PutNodePoolTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.resetGkeClusterTarget">ResetGkeClusterTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.resetNodePoolTarget">ResetNodePoolTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodePoolTarget` <a name="PutNodePoolTarget" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.putNodePoolTarget"></a>

```csharp
private void PutNodePoolTarget(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.putNodePoolTarget.parameter.value"></a>

- *Type:* object

---

##### `ResetGkeClusterTarget` <a name="ResetGkeClusterTarget" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.resetGkeClusterTarget"></a>

```csharp
private void ResetGkeClusterTarget()
```

##### `ResetNodePoolTarget` <a name="ResetNodePoolTarget" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.resetNodePoolTarget"></a>

```csharp
private void ResetNodePoolTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.nodePoolTarget">NodePoolTarget</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.gkeClusterTargetInput">GkeClusterTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.nodePoolTargetInput">NodePoolTargetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.gkeClusterTarget">GkeClusterTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodePoolTarget`<sup>Required</sup> <a name="NodePoolTarget" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.nodePoolTarget"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList NodePoolTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList</a>

---

##### `GkeClusterTargetInput`<sup>Optional</sup> <a name="GkeClusterTargetInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.gkeClusterTargetInput"></a>

```csharp
public string GkeClusterTargetInput { get; }
```

- *Type:* string

---

##### `NodePoolTargetInput`<sup>Optional</sup> <a name="NodePoolTargetInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.nodePoolTargetInput"></a>

```csharp
public object NodePoolTargetInput { get; }
```

- *Type:* object

---

##### `GkeClusterTarget`<sup>Required</sup> <a name="GkeClusterTarget" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.gkeClusterTarget"></a>

```csharp
public string GkeClusterTarget { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig</a>

---


### DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.componentVersionInput">ComponentVersionInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.componentVersion">ComponentVersion</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComponentVersionInput`<sup>Optional</sup> <a name="ComponentVersionInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.componentVersionInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ComponentVersionInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ComponentVersion`<sup>Required</sup> <a name="ComponentVersion" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.componentVersion"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ComponentVersion { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig</a>

---


### DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.putGkeClusterConfig">PutGkeClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.putKubernetesSoftwareConfig">PutKubernetesSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.resetKubernetesNamespace">ResetKubernetesNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGkeClusterConfig` <a name="PutGkeClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.putGkeClusterConfig"></a>

```csharp
private void PutGkeClusterConfig(DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.putGkeClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig</a>

---

##### `PutKubernetesSoftwareConfig` <a name="PutKubernetesSoftwareConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.putKubernetesSoftwareConfig"></a>

```csharp
private void PutKubernetesSoftwareConfig(DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.putKubernetesSoftwareConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig</a>

---

##### `ResetKubernetesNamespace` <a name="ResetKubernetesNamespace" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.resetKubernetesNamespace"></a>

```csharp
private void ResetKubernetesNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.gkeClusterConfig">GkeClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.kubernetesSoftwareConfig">KubernetesSoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.gkeClusterConfigInput">GkeClusterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.kubernetesNamespaceInput">KubernetesNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.kubernetesSoftwareConfigInput">KubernetesSoftwareConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.kubernetesNamespace">KubernetesNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GkeClusterConfig`<sup>Required</sup> <a name="GkeClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.gkeClusterConfig"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference GkeClusterConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference</a>

---

##### `KubernetesSoftwareConfig`<sup>Required</sup> <a name="KubernetesSoftwareConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.kubernetesSoftwareConfig"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference KubernetesSoftwareConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference</a>

---

##### `GkeClusterConfigInput`<sup>Optional</sup> <a name="GkeClusterConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.gkeClusterConfigInput"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig GkeClusterConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig</a>

---

##### `KubernetesNamespaceInput`<sup>Optional</sup> <a name="KubernetesNamespaceInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.kubernetesNamespaceInput"></a>

```csharp
public string KubernetesNamespaceInput { get; }
```

- *Type:* string

---

##### `KubernetesSoftwareConfigInput`<sup>Optional</sup> <a name="KubernetesSoftwareConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.kubernetesSoftwareConfigInput"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig KubernetesSoftwareConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig</a>

---

##### `KubernetesNamespace`<sup>Required</sup> <a name="KubernetesNamespace" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.kubernetesNamespace"></a>

```csharp
public string KubernetesNamespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfig</a>

---


### DataprocClusterVirtualClusterConfigOutputReference <a name="DataprocClusterVirtualClusterConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocClusterVirtualClusterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.putAuxiliaryServicesConfig">PutAuxiliaryServicesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.putKubernetesClusterConfig">PutKubernetesClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.resetAuxiliaryServicesConfig">ResetAuxiliaryServicesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.resetKubernetesClusterConfig">ResetKubernetesClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.resetStagingBucket">ResetStagingBucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuxiliaryServicesConfig` <a name="PutAuxiliaryServicesConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.putAuxiliaryServicesConfig"></a>

```csharp
private void PutAuxiliaryServicesConfig(DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.putAuxiliaryServicesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig</a>

---

##### `PutKubernetesClusterConfig` <a name="PutKubernetesClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.putKubernetesClusterConfig"></a>

```csharp
private void PutKubernetesClusterConfig(DataprocClusterVirtualClusterConfigKubernetesClusterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.putKubernetesClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfig</a>

---

##### `ResetAuxiliaryServicesConfig` <a name="ResetAuxiliaryServicesConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.resetAuxiliaryServicesConfig"></a>

```csharp
private void ResetAuxiliaryServicesConfig()
```

##### `ResetKubernetesClusterConfig` <a name="ResetKubernetesClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.resetKubernetesClusterConfig"></a>

```csharp
private void ResetKubernetesClusterConfig()
```

##### `ResetStagingBucket` <a name="ResetStagingBucket" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.resetStagingBucket"></a>

```csharp
private void ResetStagingBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.auxiliaryServicesConfig">AuxiliaryServicesConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.kubernetesClusterConfig">KubernetesClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.auxiliaryServicesConfigInput">AuxiliaryServicesConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.kubernetesClusterConfigInput">KubernetesClusterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.stagingBucketInput">StagingBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.stagingBucket">StagingBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig">DataprocClusterVirtualClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuxiliaryServicesConfig`<sup>Required</sup> <a name="AuxiliaryServicesConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.auxiliaryServicesConfig"></a>

```csharp
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference AuxiliaryServicesConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference</a>

---

##### `KubernetesClusterConfig`<sup>Required</sup> <a name="KubernetesClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.kubernetesClusterConfig"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference KubernetesClusterConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference</a>

---

##### `AuxiliaryServicesConfigInput`<sup>Optional</sup> <a name="AuxiliaryServicesConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.auxiliaryServicesConfigInput"></a>

```csharp
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig AuxiliaryServicesConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig</a>

---

##### `KubernetesClusterConfigInput`<sup>Optional</sup> <a name="KubernetesClusterConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.kubernetesClusterConfigInput"></a>

```csharp
public DataprocClusterVirtualClusterConfigKubernetesClusterConfig KubernetesClusterConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfig</a>

---

##### `StagingBucketInput`<sup>Optional</sup> <a name="StagingBucketInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.stagingBucketInput"></a>

```csharp
public string StagingBucketInput { get; }
```

- *Type:* string

---

##### `StagingBucket`<sup>Required</sup> <a name="StagingBucket" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.stagingBucket"></a>

```csharp
public string StagingBucket { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocClusterVirtualClusterConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig">DataprocClusterVirtualClusterConfig</a>

---



