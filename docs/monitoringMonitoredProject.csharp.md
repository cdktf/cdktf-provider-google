# `google_monitoring_monitored_project`

Refer to the Terraform Registory for docs: [`google_monitoring_monitored_project`](https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/monitoring_monitored_project).

# `monitoringMonitoredProject` Submodule <a name="`monitoringMonitoredProject` Submodule" id="@cdktf/provider-google.monitoringMonitoredProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringMonitoredProject <a name="MonitoringMonitoredProject" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/monitoring_monitored_project google_monitoring_monitored_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringMonitoredProject(Construct Scope, string Id, MonitoringMonitoredProjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig">MonitoringMonitoredProjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig">MonitoringMonitoredProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.putTimeouts"></a>

```csharp
private void PutTimeouts(MonitoringMonitoredProjectTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts">MonitoringMonitoredProjectTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MonitoringMonitoredProject.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MonitoringMonitoredProject.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MonitoringMonitoredProject.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference">MonitoringMonitoredProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.metricsScopeInput">MetricsScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.metricsScope">MetricsScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.timeouts"></a>

```csharp
public MonitoringMonitoredProjectTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference">MonitoringMonitoredProjectTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetricsScopeInput`<sup>Optional</sup> <a name="MetricsScopeInput" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.metricsScopeInput"></a>

```csharp
public string MetricsScopeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetricsScope`<sup>Required</sup> <a name="MetricsScope" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.metricsScope"></a>

```csharp
public string MetricsScope { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringMonitoredProjectConfig <a name="MonitoringMonitoredProjectConfig" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringMonitoredProjectConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MetricsScope,
    string Name,
    string Id = null,
    MonitoringMonitoredProjectTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.metricsScope">MetricsScope</a></code> | <code>string</code> | Required. The resource name of the existing Metrics Scope that will monitor this project. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.name">Name</a></code> | <code>string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/monitoring_monitored_project#id MonitoringMonitoredProject#id}. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts">MonitoringMonitoredProjectTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MetricsScope`<sup>Required</sup> <a name="MetricsScope" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.metricsScope"></a>

```csharp
public string MetricsScope { get; set; }
```

- *Type:* string

Required. The resource name of the existing Metrics Scope that will monitor this project. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/monitoring_monitored_project#metrics_scope MonitoringMonitoredProject#metrics_scope}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Immutable.

The resource name of the `MonitoredProject`. On input, the resource name includes the scoping project ID and monitored project ID. On output, it contains the equivalent project numbers. Example: `locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}/projects/{MONITORED_PROJECT_ID_OR_NUMBER}`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/monitoring_monitored_project#name MonitoringMonitoredProject#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/monitoring_monitored_project#id MonitoringMonitoredProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.timeouts"></a>

```csharp
public MonitoringMonitoredProjectTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts">MonitoringMonitoredProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/monitoring_monitored_project#timeouts MonitoringMonitoredProject#timeouts}

---

### MonitoringMonitoredProjectTimeouts <a name="MonitoringMonitoredProjectTimeouts" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringMonitoredProjectTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/monitoring_monitored_project#create MonitoringMonitoredProject#create}. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/monitoring_monitored_project#delete MonitoringMonitoredProject#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/monitoring_monitored_project#create MonitoringMonitoredProject#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/monitoring_monitored_project#delete MonitoringMonitoredProject#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringMonitoredProjectTimeoutsOutputReference <a name="MonitoringMonitoredProjectTimeoutsOutputReference" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringMonitoredProjectTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



