# `data_google_monitoring_uptime_check_ips`

Refer to the Terraform Registory for docs: [`data_google_monitoring_uptime_check_ips`](https://www.terraform.io/docs/providers/google/d/monitoring_uptime_check_ips).

# `dataGoogleMonitoringUptimeCheckIps` Submodule <a name="`dataGoogleMonitoringUptimeCheckIps` Submodule" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMonitoringUptimeCheckIps <a name="DataGoogleMonitoringUptimeCheckIps" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/monitoring_uptime_check_ips google_monitoring_uptime_check_ips}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMonitoringUptimeCheckIps(Construct Scope, string Id, DataGoogleMonitoringUptimeCheckIpsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig">DataGoogleMonitoringUptimeCheckIpsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig">DataGoogleMonitoringUptimeCheckIpsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleMonitoringUptimeCheckIps.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleMonitoringUptimeCheckIps.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleMonitoringUptimeCheckIps.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.uptimeCheckIps">UptimeCheckIps</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList">DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `UptimeCheckIps`<sup>Required</sup> <a name="UptimeCheckIps" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.uptimeCheckIps"></a>

```csharp
public DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList UptimeCheckIps { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList">DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMonitoringUptimeCheckIpsConfig <a name="DataGoogleMonitoringUptimeCheckIpsConfig" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMonitoringUptimeCheckIpsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_uptime_check_ips#id DataGoogleMonitoringUptimeCheckIps#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_uptime_check_ips#id DataGoogleMonitoringUptimeCheckIps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps <a name="DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList <a name="DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.get"></a>

```csharp
private DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference <a name="DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps">DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps">DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps</a>

---



