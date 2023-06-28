# `google_monitoring_slo`

Refer to the Terraform Registory for docs: [`google_monitoring_slo`](https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo).

# `monitoringSlo` Submodule <a name="`monitoringSlo` Submodule" id="@cdktf/provider-google.monitoringSlo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringSlo <a name="MonitoringSlo" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo google_monitoring_slo}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSlo(Construct Scope, string Id, MonitoringSloConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig">MonitoringSloConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig">MonitoringSloConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.putBasicSli">PutBasicSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.putRequestBasedSli">PutRequestBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.putWindowsBasedSli">PutWindowsBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetBasicSli">ResetBasicSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetCalendarPeriod">ResetCalendarPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetRequestBasedSli">ResetRequestBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetRollingPeriodDays">ResetRollingPeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetSloId">ResetSloId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetUserLabels">ResetUserLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetWindowsBasedSli">ResetWindowsBasedSli</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutBasicSli` <a name="PutBasicSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putBasicSli"></a>

```csharp
private void PutBasicSli(MonitoringSloBasicSli Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putBasicSli.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a>

---

##### `PutRequestBasedSli` <a name="PutRequestBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putRequestBasedSli"></a>

```csharp
private void PutRequestBasedSli(MonitoringSloRequestBasedSli Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putRequestBasedSli.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putTimeouts"></a>

```csharp
private void PutTimeouts(MonitoringSloTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts">MonitoringSloTimeouts</a>

---

##### `PutWindowsBasedSli` <a name="PutWindowsBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putWindowsBasedSli"></a>

```csharp
private void PutWindowsBasedSli(MonitoringSloWindowsBasedSli Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putWindowsBasedSli.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a>

---

##### `ResetBasicSli` <a name="ResetBasicSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetBasicSli"></a>

```csharp
private void ResetBasicSli()
```

##### `ResetCalendarPeriod` <a name="ResetCalendarPeriod" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetCalendarPeriod"></a>

```csharp
private void ResetCalendarPeriod()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRequestBasedSli` <a name="ResetRequestBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetRequestBasedSli"></a>

```csharp
private void ResetRequestBasedSli()
```

##### `ResetRollingPeriodDays` <a name="ResetRollingPeriodDays" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetRollingPeriodDays"></a>

```csharp
private void ResetRollingPeriodDays()
```

##### `ResetSloId` <a name="ResetSloId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetSloId"></a>

```csharp
private void ResetSloId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserLabels` <a name="ResetUserLabels" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetUserLabels"></a>

```csharp
private void ResetUserLabels()
```

##### `ResetWindowsBasedSli` <a name="ResetWindowsBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetWindowsBasedSli"></a>

```csharp
private void ResetWindowsBasedSli()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MonitoringSlo.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MonitoringSlo.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MonitoringSlo.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.basicSli">BasicSli</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference">MonitoringSloBasicSliOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.requestBasedSli">RequestBasedSli</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference">MonitoringSloRequestBasedSliOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference">MonitoringSloTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.windowsBasedSli">WindowsBasedSli</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference">MonitoringSloWindowsBasedSliOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.basicSliInput">BasicSliInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.calendarPeriodInput">CalendarPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.goalInput">GoalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.requestBasedSliInput">RequestBasedSliInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.rollingPeriodDaysInput">RollingPeriodDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.sloIdInput">SloIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.userLabelsInput">UserLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.windowsBasedSliInput">WindowsBasedSliInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.calendarPeriod">CalendarPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.goal">Goal</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.rollingPeriodDays">RollingPeriodDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.sloId">SloId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.userLabels">UserLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BasicSli`<sup>Required</sup> <a name="BasicSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.basicSli"></a>

```csharp
public MonitoringSloBasicSliOutputReference BasicSli { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference">MonitoringSloBasicSliOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RequestBasedSli`<sup>Required</sup> <a name="RequestBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.requestBasedSli"></a>

```csharp
public MonitoringSloRequestBasedSliOutputReference RequestBasedSli { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference">MonitoringSloRequestBasedSliOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.timeouts"></a>

```csharp
public MonitoringSloTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference">MonitoringSloTimeoutsOutputReference</a>

---

##### `WindowsBasedSli`<sup>Required</sup> <a name="WindowsBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.windowsBasedSli"></a>

```csharp
public MonitoringSloWindowsBasedSliOutputReference WindowsBasedSli { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference">MonitoringSloWindowsBasedSliOutputReference</a>

---

##### `BasicSliInput`<sup>Optional</sup> <a name="BasicSliInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.basicSliInput"></a>

```csharp
public MonitoringSloBasicSli BasicSliInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a>

---

##### `CalendarPeriodInput`<sup>Optional</sup> <a name="CalendarPeriodInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.calendarPeriodInput"></a>

```csharp
public string CalendarPeriodInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `GoalInput`<sup>Optional</sup> <a name="GoalInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.goalInput"></a>

```csharp
public double GoalInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RequestBasedSliInput`<sup>Optional</sup> <a name="RequestBasedSliInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.requestBasedSliInput"></a>

```csharp
public MonitoringSloRequestBasedSli RequestBasedSliInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a>

---

##### `RollingPeriodDaysInput`<sup>Optional</sup> <a name="RollingPeriodDaysInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.rollingPeriodDaysInput"></a>

```csharp
public double RollingPeriodDaysInput { get; }
```

- *Type:* double

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `SloIdInput`<sup>Optional</sup> <a name="SloIdInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.sloIdInput"></a>

```csharp
public string SloIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserLabelsInput`<sup>Optional</sup> <a name="UserLabelsInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.userLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WindowsBasedSliInput`<sup>Optional</sup> <a name="WindowsBasedSliInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.windowsBasedSliInput"></a>

```csharp
public MonitoringSloWindowsBasedSli WindowsBasedSliInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a>

---

##### `CalendarPeriod`<sup>Required</sup> <a name="CalendarPeriod" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.calendarPeriod"></a>

```csharp
public string CalendarPeriod { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Goal`<sup>Required</sup> <a name="Goal" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.goal"></a>

```csharp
public double Goal { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RollingPeriodDays`<sup>Required</sup> <a name="RollingPeriodDays" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.rollingPeriodDays"></a>

```csharp
public double RollingPeriodDays { get; }
```

- *Type:* double

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `SloId`<sup>Required</sup> <a name="SloId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.sloId"></a>

```csharp
public string SloId { get; }
```

- *Type:* string

---

##### `UserLabels`<sup>Required</sup> <a name="UserLabels" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.userLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringSloBasicSli <a name="MonitoringSloBasicSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloBasicSli {
    MonitoringSloBasicSliAvailability Availability = null,
    MonitoringSloBasicSliLatency Latency = null,
    string[] Location = null,
    string[] Method = null,
    string[] Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.availability">Availability</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability">MonitoringSloBasicSliAvailability</a></code> | availability block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.latency">Latency</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency">MonitoringSloBasicSliLatency</a></code> | latency block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.location">Location</a></code> | <code>string[]</code> | An optional set of locations to which this SLI is relevant. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.method">Method</a></code> | <code>string[]</code> | An optional set of RPCs to which this SLI is relevant. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.version">Version</a></code> | <code>string[]</code> | The set of API versions to which this SLI is relevant. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.availability"></a>

```csharp
public MonitoringSloBasicSliAvailability Availability { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability">MonitoringSloBasicSliAvailability</a>

availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#availability MonitoringSlo#availability}

---

##### `Latency`<sup>Optional</sup> <a name="Latency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.latency"></a>

```csharp
public MonitoringSloBasicSliLatency Latency { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency">MonitoringSloBasicSliLatency</a>

latency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#latency MonitoringSlo#latency}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.location"></a>

```csharp
public string[] Location { get; set; }
```

- *Type:* string[]

An optional set of locations to which this SLI is relevant.

Telemetry from other locations will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
locations in which the Service has activity. For service types
that don't support breaking down by location, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#location MonitoringSlo#location}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.method"></a>

```csharp
public string[] Method { get; set; }
```

- *Type:* string[]

An optional set of RPCs to which this SLI is relevant.

Telemetry from other methods will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
the Service's methods. For service types that don't support
breaking down by method, setting this field will result in an
error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#method MonitoringSlo#method}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.version"></a>

```csharp
public string[] Version { get; set; }
```

- *Type:* string[]

The set of API versions to which this SLI is relevant.

Telemetry from other API versions will not be used to
calculate performance for this SLI. If omitted,
this SLI applies to all API versions. For service types
that don't support breaking down by version, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#version MonitoringSlo#version}

---

### MonitoringSloBasicSliAvailability <a name="MonitoringSloBasicSliAvailability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloBasicSliAvailability {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability.property.enabled">Enabled</a></code> | <code>object</code> | Whether an availability SLI is enabled or not. Must be set to true. Defaults to 'true'. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether an availability SLI is enabled or not. Must be set to true. Defaults to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#enabled MonitoringSlo#enabled}

---

### MonitoringSloBasicSliLatency <a name="MonitoringSloBasicSliLatency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloBasicSliLatency {
    string Threshold
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency.property.threshold">Threshold</a></code> | <code>string</code> | A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold. |

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency.property.threshold"></a>

```csharp
public string Threshold { get; set; }
```

- *Type:* string

A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#threshold MonitoringSlo#threshold}

---

### MonitoringSloConfig <a name="MonitoringSloConfig" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double Goal,
    string Service,
    MonitoringSloBasicSli BasicSli = null,
    string CalendarPeriod = null,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    MonitoringSloRequestBasedSli RequestBasedSli = null,
    double RollingPeriodDays = null,
    string SloId = null,
    MonitoringSloTimeouts Timeouts = null,
    System.Collections.Generic.IDictionary<string, string> UserLabels = null,
    MonitoringSloWindowsBasedSli WindowsBasedSli = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.goal">Goal</a></code> | <code>double</code> | The fraction of service that must be good in order for this objective to be met. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.service">Service</a></code> | <code>string</code> | ID of the service to which this SLO belongs. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.basicSli">BasicSli</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a></code> | basic_sli block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.calendarPeriod">CalendarPeriod</a></code> | <code>string</code> | A calendar period, semantically "since the start of the current <calendarPeriod>". Possible values: ["DAY", "WEEK", "FORTNIGHT", "MONTH"]. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Name used for UI elements listing this SLO. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#id MonitoringSlo#id}. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#project MonitoringSlo#project}. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.requestBasedSli">RequestBasedSli</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a></code> | request_based_sli block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.rollingPeriodDays">RollingPeriodDays</a></code> | <code>double</code> | A rolling time period, semantically "in the past X days". Must be between 1 to 30 days, inclusive. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.sloId">SloId</a></code> | <code>string</code> | The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts">MonitoringSloTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.userLabels">UserLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.windowsBasedSli">WindowsBasedSli</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a></code> | windows_based_sli block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Goal`<sup>Required</sup> <a name="Goal" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.goal"></a>

```csharp
public double Goal { get; set; }
```

- *Type:* double

The fraction of service that must be good in order for this objective to be met.

0 < goal <= 0.999

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#goal MonitoringSlo#goal}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

ID of the service to which this SLO belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#service MonitoringSlo#service}

---

##### `BasicSli`<sup>Optional</sup> <a name="BasicSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.basicSli"></a>

```csharp
public MonitoringSloBasicSli BasicSli { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a>

basic_sli block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#basic_sli MonitoringSlo#basic_sli}

---

##### `CalendarPeriod`<sup>Optional</sup> <a name="CalendarPeriod" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.calendarPeriod"></a>

```csharp
public string CalendarPeriod { get; set; }
```

- *Type:* string

A calendar period, semantically "since the start of the current <calendarPeriod>". Possible values: ["DAY", "WEEK", "FORTNIGHT", "MONTH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#calendar_period MonitoringSlo#calendar_period}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Name used for UI elements listing this SLO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#display_name MonitoringSlo#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#id MonitoringSlo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#project MonitoringSlo#project}.

---

##### `RequestBasedSli`<sup>Optional</sup> <a name="RequestBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.requestBasedSli"></a>

```csharp
public MonitoringSloRequestBasedSli RequestBasedSli { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a>

request_based_sli block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#request_based_sli MonitoringSlo#request_based_sli}

---

##### `RollingPeriodDays`<sup>Optional</sup> <a name="RollingPeriodDays" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.rollingPeriodDays"></a>

```csharp
public double RollingPeriodDays { get; set; }
```

- *Type:* double

A rolling time period, semantically "in the past X days". Must be between 1 to 30 days, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#rolling_period_days MonitoringSlo#rolling_period_days}

---

##### `SloId`<sup>Optional</sup> <a name="SloId" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.sloId"></a>

```csharp
public string SloId { get; set; }
```

- *Type:* string

The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#slo_id MonitoringSlo#slo_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.timeouts"></a>

```csharp
public MonitoringSloTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts">MonitoringSloTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#timeouts MonitoringSlo#timeouts}

---

##### `UserLabels`<sup>Optional</sup> <a name="UserLabels" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.userLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#user_labels MonitoringSlo#user_labels}

---

##### `WindowsBasedSli`<sup>Optional</sup> <a name="WindowsBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.windowsBasedSli"></a>

```csharp
public MonitoringSloWindowsBasedSli WindowsBasedSli { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a>

windows_based_sli block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#windows_based_sli MonitoringSlo#windows_based_sli}

---

### MonitoringSloRequestBasedSli <a name="MonitoringSloRequestBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloRequestBasedSli {
    MonitoringSloRequestBasedSliDistributionCut DistributionCut = null,
    MonitoringSloRequestBasedSliGoodTotalRatio GoodTotalRatio = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli.property.distributionCut">DistributionCut</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut">MonitoringSloRequestBasedSliDistributionCut</a></code> | distribution_cut block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli.property.goodTotalRatio">GoodTotalRatio</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio">MonitoringSloRequestBasedSliGoodTotalRatio</a></code> | good_total_ratio block. |

---

##### `DistributionCut`<sup>Optional</sup> <a name="DistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli.property.distributionCut"></a>

```csharp
public MonitoringSloRequestBasedSliDistributionCut DistributionCut { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut">MonitoringSloRequestBasedSliDistributionCut</a>

distribution_cut block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#distribution_cut MonitoringSlo#distribution_cut}

---

##### `GoodTotalRatio`<sup>Optional</sup> <a name="GoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli.property.goodTotalRatio"></a>

```csharp
public MonitoringSloRequestBasedSliGoodTotalRatio GoodTotalRatio { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio">MonitoringSloRequestBasedSliGoodTotalRatio</a>

good_total_ratio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#good_total_ratio MonitoringSlo#good_total_ratio}

---

### MonitoringSloRequestBasedSliDistributionCut <a name="MonitoringSloRequestBasedSliDistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloRequestBasedSliDistributionCut {
    string DistributionFilter,
    MonitoringSloRequestBasedSliDistributionCutRange Range
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut.property.distributionFilter">DistributionFilter</a></code> | <code>string</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange">MonitoringSloRequestBasedSliDistributionCutRange</a></code> | range block. |

---

##### `DistributionFilter`<sup>Required</sup> <a name="DistributionFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut.property.distributionFilter"></a>

```csharp
public string DistributionFilter { get; set; }
```

- *Type:* string

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided.

Must have ValueType = DISTRIBUTION and
MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#distribution_filter MonitoringSlo#distribution_filter}

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut.property.range"></a>

```csharp
public MonitoringSloRequestBasedSliDistributionCutRange Range { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange">MonitoringSloRequestBasedSliDistributionCutRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#range MonitoringSlo#range}

---

### MonitoringSloRequestBasedSliDistributionCutRange <a name="MonitoringSloRequestBasedSliDistributionCutRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloRequestBasedSliDistributionCutRange {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange.property.max">Max</a></code> | <code>double</code> | max value for the range (inclusive). If not given, will be set to 0. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange.property.min">Min</a></code> | <code>double</code> | Min value for the range (inclusive). If not given, will be set to 0. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

max value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#max MonitoringSlo#max}

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Min value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#min MonitoringSlo#min}

---

### MonitoringSloRequestBasedSliGoodTotalRatio <a name="MonitoringSloRequestBasedSliGoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloRequestBasedSliGoodTotalRatio {
    string BadServiceFilter = null,
    string GoodServiceFilter = null,
    string TotalServiceFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio.property.badServiceFilter">BadServiceFilter</a></code> | <code>string</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio.property.goodServiceFilter">GoodServiceFilter</a></code> | <code>string</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio.property.totalServiceFilter">TotalServiceFilter</a></code> | <code>string</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service. |

---

##### `BadServiceFilter`<sup>Optional</sup> <a name="BadServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio.property.badServiceFilter"></a>

```csharp
public string BadServiceFilter { get; set; }
```

- *Type:* string

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality.

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#bad_service_filter MonitoringSlo#bad_service_filter}

---

##### `GoodServiceFilter`<sup>Optional</sup> <a name="GoodServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio.property.goodServiceFilter"></a>

```csharp
public string GoodServiceFilter { get; set; }
```

- *Type:* string

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#good_service_filter MonitoringSlo#good_service_filter}

---

##### `TotalServiceFilter`<sup>Optional</sup> <a name="TotalServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio.property.totalServiceFilter"></a>

```csharp
public string TotalServiceFilter { get; set; }
```

- *Type:* string

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service.

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#total_service_filter MonitoringSlo#total_service_filter}

---

### MonitoringSloTimeouts <a name="MonitoringSloTimeouts" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#create MonitoringSlo#create}. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#delete MonitoringSlo#delete}. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#update MonitoringSlo#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#create MonitoringSlo#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#delete MonitoringSlo#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#update MonitoringSlo#update}.

---

### MonitoringSloWindowsBasedSli <a name="MonitoringSloWindowsBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSli {
    string GoodBadMetricFilter = null,
    MonitoringSloWindowsBasedSliGoodTotalRatioThreshold GoodTotalRatioThreshold = null,
    MonitoringSloWindowsBasedSliMetricMeanInRange MetricMeanInRange = null,
    MonitoringSloWindowsBasedSliMetricSumInRange MetricSumInRange = null,
    string WindowPeriod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.goodBadMetricFilter">GoodBadMetricFilter</a></code> | <code>string</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) with ValueType = BOOL. The window is good if any true values appear in the window. One of 'good_bad_metric_filter', 'good_total_ratio_threshold', 'metric_mean_in_range', 'metric_sum_in_range' must be set for 'windows_based_sli'. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.goodTotalRatioThreshold">GoodTotalRatioThreshold</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold">MonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a></code> | good_total_ratio_threshold block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.metricMeanInRange">MetricMeanInRange</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange">MonitoringSloWindowsBasedSliMetricMeanInRange</a></code> | metric_mean_in_range block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.metricSumInRange">MetricSumInRange</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange">MonitoringSloWindowsBasedSliMetricSumInRange</a></code> | metric_sum_in_range block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.windowPeriod">WindowPeriod</a></code> | <code>string</code> | Duration over which window quality is evaluated, given as a duration string "{X}s" representing X seconds. |

---

##### `GoodBadMetricFilter`<sup>Optional</sup> <a name="GoodBadMetricFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.goodBadMetricFilter"></a>

```csharp
public string GoodBadMetricFilter { get; set; }
```

- *Type:* string

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) with ValueType = BOOL. The window is good if any true values appear in the window. One of 'good_bad_metric_filter', 'good_total_ratio_threshold', 'metric_mean_in_range', 'metric_sum_in_range' must be set for 'windows_based_sli'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#good_bad_metric_filter MonitoringSlo#good_bad_metric_filter}

---

##### `GoodTotalRatioThreshold`<sup>Optional</sup> <a name="GoodTotalRatioThreshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.goodTotalRatioThreshold"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThreshold GoodTotalRatioThreshold { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold">MonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a>

good_total_ratio_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#good_total_ratio_threshold MonitoringSlo#good_total_ratio_threshold}

---

##### `MetricMeanInRange`<sup>Optional</sup> <a name="MetricMeanInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.metricMeanInRange"></a>

```csharp
public MonitoringSloWindowsBasedSliMetricMeanInRange MetricMeanInRange { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange">MonitoringSloWindowsBasedSliMetricMeanInRange</a>

metric_mean_in_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#metric_mean_in_range MonitoringSlo#metric_mean_in_range}

---

##### `MetricSumInRange`<sup>Optional</sup> <a name="MetricSumInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.metricSumInRange"></a>

```csharp
public MonitoringSloWindowsBasedSliMetricSumInRange MetricSumInRange { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange">MonitoringSloWindowsBasedSliMetricSumInRange</a>

metric_sum_in_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#metric_sum_in_range MonitoringSlo#metric_sum_in_range}

---

##### `WindowPeriod`<sup>Optional</sup> <a name="WindowPeriod" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.windowPeriod"></a>

```csharp
public string WindowPeriod { get; set; }
```

- *Type:* string

Duration over which window quality is evaluated, given as a duration string "{X}s" representing X seconds.

Must be an
integer fraction of a day and at least 60s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#window_period MonitoringSlo#window_period}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThreshold <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThreshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliGoodTotalRatioThreshold {
    MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance BasicSliPerformance = null,
    MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance Performance = null,
    double Threshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.basicSliPerformance">BasicSliPerformance</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a></code> | basic_sli_performance block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.performance">Performance</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a></code> | performance block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.threshold">Threshold</a></code> | <code>double</code> | If window performance >= threshold, the window is counted as good. |

---

##### `BasicSliPerformance`<sup>Optional</sup> <a name="BasicSliPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.basicSliPerformance"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance BasicSliPerformance { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a>

basic_sli_performance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#basic_sli_performance MonitoringSlo#basic_sli_performance}

---

##### `Performance`<sup>Optional</sup> <a name="Performance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.performance"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance Performance { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a>

performance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#performance MonitoringSlo#performance}

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

If window performance >= threshold, the window is counted as good.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#threshold MonitoringSlo#threshold}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance {
    MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability Availability = null,
    MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency Latency = null,
    string[] Location = null,
    string[] Method = null,
    string[] Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.availability">Availability</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a></code> | availability block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.latency">Latency</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a></code> | latency block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.location">Location</a></code> | <code>string[]</code> | An optional set of locations to which this SLI is relevant. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.method">Method</a></code> | <code>string[]</code> | An optional set of RPCs to which this SLI is relevant. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.version">Version</a></code> | <code>string[]</code> | The set of API versions to which this SLI is relevant. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.availability"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability Availability { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a>

availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#availability MonitoringSlo#availability}

---

##### `Latency`<sup>Optional</sup> <a name="Latency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.latency"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency Latency { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a>

latency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#latency MonitoringSlo#latency}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.location"></a>

```csharp
public string[] Location { get; set; }
```

- *Type:* string[]

An optional set of locations to which this SLI is relevant.

Telemetry from other locations will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
locations in which the Service has activity. For service types
that don't support breaking down by location, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#location MonitoringSlo#location}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.method"></a>

```csharp
public string[] Method { get; set; }
```

- *Type:* string[]

An optional set of RPCs to which this SLI is relevant.

Telemetry from other methods will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
the Service's methods. For service types that don't support
breaking down by method, setting this field will result in an
error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#method MonitoringSlo#method}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.version"></a>

```csharp
public string[] Version { get; set; }
```

- *Type:* string[]

The set of API versions to which this SLI is relevant.

Telemetry from other API versions will not be used to
calculate performance for this SLI. If omitted,
this SLI applies to all API versions. For service types
that don't support breaking down by version, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#version MonitoringSlo#version}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability.property.enabled">Enabled</a></code> | <code>object</code> | Whether an availability SLI is enabled or not. Must be set to 'true. Defaults to 'true'. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether an availability SLI is enabled or not. Must be set to 'true. Defaults to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#enabled MonitoringSlo#enabled}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency {
    string Threshold
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency.property.threshold">Threshold</a></code> | <code>string</code> | A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold. |

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency.property.threshold"></a>

```csharp
public string Threshold { get; set; }
```

- *Type:* string

A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#threshold MonitoringSlo#threshold}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance {
    MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut DistributionCut = null,
    MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio GoodTotalRatio = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.property.distributionCut">DistributionCut</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a></code> | distribution_cut block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.property.goodTotalRatio">GoodTotalRatio</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a></code> | good_total_ratio block. |

---

##### `DistributionCut`<sup>Optional</sup> <a name="DistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.property.distributionCut"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut DistributionCut { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a>

distribution_cut block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#distribution_cut MonitoringSlo#distribution_cut}

---

##### `GoodTotalRatio`<sup>Optional</sup> <a name="GoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.property.goodTotalRatio"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio GoodTotalRatio { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a>

good_total_ratio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#good_total_ratio MonitoringSlo#good_total_ratio}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut {
    string DistributionFilter,
    MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange Range
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.property.distributionFilter">DistributionFilter</a></code> | <code>string</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a></code> | range block. |

---

##### `DistributionFilter`<sup>Required</sup> <a name="DistributionFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.property.distributionFilter"></a>

```csharp
public string DistributionFilter { get; set; }
```

- *Type:* string

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided.

Must have ValueType = DISTRIBUTION and
MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#distribution_filter MonitoringSlo#distribution_filter}

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.property.range"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange Range { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#range MonitoringSlo#range}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.property.max">Max</a></code> | <code>double</code> | max value for the range (inclusive). If not given, will be set to 0. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.property.min">Min</a></code> | <code>double</code> | Min value for the range (inclusive). If not given, will be set to 0. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

max value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#max MonitoringSlo#max}

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Min value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#min MonitoringSlo#min}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio {
    string BadServiceFilter = null,
    string GoodServiceFilter = null,
    string TotalServiceFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.badServiceFilter">BadServiceFilter</a></code> | <code>string</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed). |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.goodServiceFilter">GoodServiceFilter</a></code> | <code>string</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed). |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.totalServiceFilter">TotalServiceFilter</a></code> | <code>string</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed). |

---

##### `BadServiceFilter`<sup>Optional</sup> <a name="BadServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.badServiceFilter"></a>

```csharp
public string BadServiceFilter { get; set; }
```

- *Type:* string

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed).

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#bad_service_filter MonitoringSlo#bad_service_filter}

---

##### `GoodServiceFilter`<sup>Optional</sup> <a name="GoodServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.goodServiceFilter"></a>

```csharp
public string GoodServiceFilter { get; set; }
```

- *Type:* string

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed).

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#good_service_filter MonitoringSlo#good_service_filter}

---

##### `TotalServiceFilter`<sup>Optional</sup> <a name="TotalServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.totalServiceFilter"></a>

```csharp
public string TotalServiceFilter { get; set; }
```

- *Type:* string

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed).

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#total_service_filter MonitoringSlo#total_service_filter}

---

### MonitoringSloWindowsBasedSliMetricMeanInRange <a name="MonitoringSloWindowsBasedSliMetricMeanInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliMetricMeanInRange {
    MonitoringSloWindowsBasedSliMetricMeanInRangeRange Range,
    string TimeSeries
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange">MonitoringSloWindowsBasedSliMetricMeanInRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange.property.timeSeries">TimeSeries</a></code> | <code>string</code> | A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE. Mean value 'X' should satisfy 'range.min <= X <= range.max' under good service. |

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange.property.range"></a>

```csharp
public MonitoringSloWindowsBasedSliMetricMeanInRangeRange Range { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange">MonitoringSloWindowsBasedSliMetricMeanInRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#range MonitoringSlo#range}

---

##### `TimeSeries`<sup>Required</sup> <a name="TimeSeries" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange.property.timeSeries"></a>

```csharp
public string TimeSeries { get; set; }
```

- *Type:* string

A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE. Mean value 'X' should satisfy 'range.min <= X <= range.max' under good service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#time_series MonitoringSlo#time_series}

---

### MonitoringSloWindowsBasedSliMetricMeanInRangeRange <a name="MonitoringSloWindowsBasedSliMetricMeanInRangeRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliMetricMeanInRangeRange {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange.property.max">Max</a></code> | <code>double</code> | max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min". |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange.property.min">Min</a></code> | <code>double</code> | Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max". |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#max MonitoringSlo#max}

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#min MonitoringSlo#min}

---

### MonitoringSloWindowsBasedSliMetricSumInRange <a name="MonitoringSloWindowsBasedSliMetricSumInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliMetricSumInRange {
    MonitoringSloWindowsBasedSliMetricSumInRangeRange Range,
    string TimeSeries
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange">MonitoringSloWindowsBasedSliMetricSumInRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange.property.timeSeries">TimeSeries</a></code> | <code>string</code> | A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window quality. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE. |

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange.property.range"></a>

```csharp
public MonitoringSloWindowsBasedSliMetricSumInRangeRange Range { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange">MonitoringSloWindowsBasedSliMetricSumInRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#range MonitoringSlo#range}

---

##### `TimeSeries`<sup>Required</sup> <a name="TimeSeries" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange.property.timeSeries"></a>

```csharp
public string TimeSeries { get; set; }
```

- *Type:* string

A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window quality. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE.

Summed value 'X' should satisfy
'range.min <= X <= range.max' for a good window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#time_series MonitoringSlo#time_series}

---

### MonitoringSloWindowsBasedSliMetricSumInRangeRange <a name="MonitoringSloWindowsBasedSliMetricSumInRangeRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliMetricSumInRangeRange {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange.property.max">Max</a></code> | <code>double</code> | max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min". |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange.property.min">Min</a></code> | <code>double</code> | Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max". |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#max MonitoringSlo#max}

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/monitoring_slo#min MonitoringSlo#min}

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringSloBasicSliAvailabilityOutputReference <a name="MonitoringSloBasicSliAvailabilityOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloBasicSliAvailabilityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability">MonitoringSloBasicSliAvailability</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.internalValue"></a>

```csharp
public MonitoringSloBasicSliAvailability InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability">MonitoringSloBasicSliAvailability</a>

---


### MonitoringSloBasicSliLatencyOutputReference <a name="MonitoringSloBasicSliLatencyOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloBasicSliLatencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.threshold">Threshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency">MonitoringSloBasicSliLatency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.thresholdInput"></a>

```csharp
public string ThresholdInput { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.threshold"></a>

```csharp
public string Threshold { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.internalValue"></a>

```csharp
public MonitoringSloBasicSliLatency InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency">MonitoringSloBasicSliLatency</a>

---


### MonitoringSloBasicSliOutputReference <a name="MonitoringSloBasicSliOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloBasicSliOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.putAvailability">PutAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.putLatency">PutLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetLatency">ResetLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvailability` <a name="PutAvailability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.putAvailability"></a>

```csharp
private void PutAvailability(MonitoringSloBasicSliAvailability Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.putAvailability.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability">MonitoringSloBasicSliAvailability</a>

---

##### `PutLatency` <a name="PutLatency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.putLatency"></a>

```csharp
private void PutLatency(MonitoringSloBasicSliLatency Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.putLatency.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency">MonitoringSloBasicSliLatency</a>

---

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetAvailability"></a>

```csharp
private void ResetAvailability()
```

##### `ResetLatency` <a name="ResetLatency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetLatency"></a>

```csharp
private void ResetLatency()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.availability">Availability</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference">MonitoringSloBasicSliAvailabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.latency">Latency</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference">MonitoringSloBasicSliLatencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability">MonitoringSloBasicSliAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.latencyInput">LatencyInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency">MonitoringSloBasicSliLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.locationInput">LocationInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.methodInput">MethodInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.versionInput">VersionInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.location">Location</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.method">Method</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.version">Version</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.availability"></a>

```csharp
public MonitoringSloBasicSliAvailabilityOutputReference Availability { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference">MonitoringSloBasicSliAvailabilityOutputReference</a>

---

##### `Latency`<sup>Required</sup> <a name="Latency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.latency"></a>

```csharp
public MonitoringSloBasicSliLatencyOutputReference Latency { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference">MonitoringSloBasicSliLatencyOutputReference</a>

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.availabilityInput"></a>

```csharp
public MonitoringSloBasicSliAvailability AvailabilityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability">MonitoringSloBasicSliAvailability</a>

---

##### `LatencyInput`<sup>Optional</sup> <a name="LatencyInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.latencyInput"></a>

```csharp
public MonitoringSloBasicSliLatency LatencyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency">MonitoringSloBasicSliLatency</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.locationInput"></a>

```csharp
public string[] LocationInput { get; }
```

- *Type:* string[]

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.methodInput"></a>

```csharp
public string[] MethodInput { get; }
```

- *Type:* string[]

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.versionInput"></a>

```csharp
public string[] VersionInput { get; }
```

- *Type:* string[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.location"></a>

```csharp
public string[] Location { get; }
```

- *Type:* string[]

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.method"></a>

```csharp
public string[] Method { get; }
```

- *Type:* string[]

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.version"></a>

```csharp
public string[] Version { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.internalValue"></a>

```csharp
public MonitoringSloBasicSli InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a>

---


### MonitoringSloRequestBasedSliDistributionCutOutputReference <a name="MonitoringSloRequestBasedSliDistributionCutOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloRequestBasedSliDistributionCutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.putRange">PutRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.putRange"></a>

```csharp
private void PutRange(MonitoringSloRequestBasedSliDistributionCutRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange">MonitoringSloRequestBasedSliDistributionCutRange</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference">MonitoringSloRequestBasedSliDistributionCutRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.distributionFilterInput">DistributionFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange">MonitoringSloRequestBasedSliDistributionCutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.distributionFilter">DistributionFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut">MonitoringSloRequestBasedSliDistributionCut</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.range"></a>

```csharp
public MonitoringSloRequestBasedSliDistributionCutRangeOutputReference Range { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference">MonitoringSloRequestBasedSliDistributionCutRangeOutputReference</a>

---

##### `DistributionFilterInput`<sup>Optional</sup> <a name="DistributionFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.distributionFilterInput"></a>

```csharp
public string DistributionFilterInput { get; }
```

- *Type:* string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.rangeInput"></a>

```csharp
public MonitoringSloRequestBasedSliDistributionCutRange RangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange">MonitoringSloRequestBasedSliDistributionCutRange</a>

---

##### `DistributionFilter`<sup>Required</sup> <a name="DistributionFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.distributionFilter"></a>

```csharp
public string DistributionFilter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.internalValue"></a>

```csharp
public MonitoringSloRequestBasedSliDistributionCut InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut">MonitoringSloRequestBasedSliDistributionCut</a>

---


### MonitoringSloRequestBasedSliDistributionCutRangeOutputReference <a name="MonitoringSloRequestBasedSliDistributionCutRangeOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloRequestBasedSliDistributionCutRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange">MonitoringSloRequestBasedSliDistributionCutRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.internalValue"></a>

```csharp
public MonitoringSloRequestBasedSliDistributionCutRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange">MonitoringSloRequestBasedSliDistributionCutRange</a>

---


### MonitoringSloRequestBasedSliGoodTotalRatioOutputReference <a name="MonitoringSloRequestBasedSliGoodTotalRatioOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloRequestBasedSliGoodTotalRatioOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetBadServiceFilter">ResetBadServiceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetGoodServiceFilter">ResetGoodServiceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetTotalServiceFilter">ResetTotalServiceFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBadServiceFilter` <a name="ResetBadServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetBadServiceFilter"></a>

```csharp
private void ResetBadServiceFilter()
```

##### `ResetGoodServiceFilter` <a name="ResetGoodServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetGoodServiceFilter"></a>

```csharp
private void ResetGoodServiceFilter()
```

##### `ResetTotalServiceFilter` <a name="ResetTotalServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetTotalServiceFilter"></a>

```csharp
private void ResetTotalServiceFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.badServiceFilterInput">BadServiceFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.goodServiceFilterInput">GoodServiceFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.totalServiceFilterInput">TotalServiceFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.badServiceFilter">BadServiceFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.goodServiceFilter">GoodServiceFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.totalServiceFilter">TotalServiceFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio">MonitoringSloRequestBasedSliGoodTotalRatio</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BadServiceFilterInput`<sup>Optional</sup> <a name="BadServiceFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.badServiceFilterInput"></a>

```csharp
public string BadServiceFilterInput { get; }
```

- *Type:* string

---

##### `GoodServiceFilterInput`<sup>Optional</sup> <a name="GoodServiceFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.goodServiceFilterInput"></a>

```csharp
public string GoodServiceFilterInput { get; }
```

- *Type:* string

---

##### `TotalServiceFilterInput`<sup>Optional</sup> <a name="TotalServiceFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.totalServiceFilterInput"></a>

```csharp
public string TotalServiceFilterInput { get; }
```

- *Type:* string

---

##### `BadServiceFilter`<sup>Required</sup> <a name="BadServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.badServiceFilter"></a>

```csharp
public string BadServiceFilter { get; }
```

- *Type:* string

---

##### `GoodServiceFilter`<sup>Required</sup> <a name="GoodServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.goodServiceFilter"></a>

```csharp
public string GoodServiceFilter { get; }
```

- *Type:* string

---

##### `TotalServiceFilter`<sup>Required</sup> <a name="TotalServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.totalServiceFilter"></a>

```csharp
public string TotalServiceFilter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.internalValue"></a>

```csharp
public MonitoringSloRequestBasedSliGoodTotalRatio InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio">MonitoringSloRequestBasedSliGoodTotalRatio</a>

---


### MonitoringSloRequestBasedSliOutputReference <a name="MonitoringSloRequestBasedSliOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloRequestBasedSliOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.putDistributionCut">PutDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.putGoodTotalRatio">PutGoodTotalRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.resetDistributionCut">ResetDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.resetGoodTotalRatio">ResetGoodTotalRatio</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDistributionCut` <a name="PutDistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.putDistributionCut"></a>

```csharp
private void PutDistributionCut(MonitoringSloRequestBasedSliDistributionCut Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.putDistributionCut.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut">MonitoringSloRequestBasedSliDistributionCut</a>

---

##### `PutGoodTotalRatio` <a name="PutGoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.putGoodTotalRatio"></a>

```csharp
private void PutGoodTotalRatio(MonitoringSloRequestBasedSliGoodTotalRatio Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.putGoodTotalRatio.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio">MonitoringSloRequestBasedSliGoodTotalRatio</a>

---

##### `ResetDistributionCut` <a name="ResetDistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.resetDistributionCut"></a>

```csharp
private void ResetDistributionCut()
```

##### `ResetGoodTotalRatio` <a name="ResetGoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.resetGoodTotalRatio"></a>

```csharp
private void ResetGoodTotalRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.distributionCut">DistributionCut</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference">MonitoringSloRequestBasedSliDistributionCutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.goodTotalRatio">GoodTotalRatio</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference">MonitoringSloRequestBasedSliGoodTotalRatioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.distributionCutInput">DistributionCutInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut">MonitoringSloRequestBasedSliDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.goodTotalRatioInput">GoodTotalRatioInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio">MonitoringSloRequestBasedSliGoodTotalRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DistributionCut`<sup>Required</sup> <a name="DistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.distributionCut"></a>

```csharp
public MonitoringSloRequestBasedSliDistributionCutOutputReference DistributionCut { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference">MonitoringSloRequestBasedSliDistributionCutOutputReference</a>

---

##### `GoodTotalRatio`<sup>Required</sup> <a name="GoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.goodTotalRatio"></a>

```csharp
public MonitoringSloRequestBasedSliGoodTotalRatioOutputReference GoodTotalRatio { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference">MonitoringSloRequestBasedSliGoodTotalRatioOutputReference</a>

---

##### `DistributionCutInput`<sup>Optional</sup> <a name="DistributionCutInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.distributionCutInput"></a>

```csharp
public MonitoringSloRequestBasedSliDistributionCut DistributionCutInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut">MonitoringSloRequestBasedSliDistributionCut</a>

---

##### `GoodTotalRatioInput`<sup>Optional</sup> <a name="GoodTotalRatioInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.goodTotalRatioInput"></a>

```csharp
public MonitoringSloRequestBasedSliGoodTotalRatio GoodTotalRatioInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio">MonitoringSloRequestBasedSliGoodTotalRatio</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.internalValue"></a>

```csharp
public MonitoringSloRequestBasedSli InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a>

---


### MonitoringSloTimeoutsOutputReference <a name="MonitoringSloTimeoutsOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.internalValue"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.threshold">Threshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.thresholdInput"></a>

```csharp
public string ThresholdInput { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.threshold"></a>

```csharp
public string Threshold { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.internalValue"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putAvailability">PutAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putLatency">PutLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetLatency">ResetLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvailability` <a name="PutAvailability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putAvailability"></a>

```csharp
private void PutAvailability(MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putAvailability.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a>

---

##### `PutLatency` <a name="PutLatency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putLatency"></a>

```csharp
private void PutLatency(MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putLatency.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a>

---

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetAvailability"></a>

```csharp
private void ResetAvailability()
```

##### `ResetLatency` <a name="ResetLatency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetLatency"></a>

```csharp
private void ResetLatency()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.availability">Availability</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.latency">Latency</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.latencyInput">LatencyInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.locationInput">LocationInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.methodInput">MethodInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.versionInput">VersionInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.location">Location</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.method">Method</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.version">Version</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.availability"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference Availability { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference</a>

---

##### `Latency`<sup>Required</sup> <a name="Latency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.latency"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference Latency { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference</a>

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.availabilityInput"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability AvailabilityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a>

---

##### `LatencyInput`<sup>Optional</sup> <a name="LatencyInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.latencyInput"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency LatencyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.locationInput"></a>

```csharp
public string[] LocationInput { get; }
```

- *Type:* string[]

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.methodInput"></a>

```csharp
public string[] MethodInput { get; }
```

- *Type:* string[]

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.versionInput"></a>

```csharp
public string[] VersionInput { get; }
```

- *Type:* string[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.location"></a>

```csharp
public string[] Location { get; }
```

- *Type:* string[]

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.method"></a>

```csharp
public string[] Method { get; }
```

- *Type:* string[]

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.version"></a>

```csharp
public string[] Version { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.internalValue"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putBasicSliPerformance">PutBasicSliPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putPerformance">PutPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetBasicSliPerformance">ResetBasicSliPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetPerformance">ResetPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasicSliPerformance` <a name="PutBasicSliPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putBasicSliPerformance"></a>

```csharp
private void PutBasicSliPerformance(MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putBasicSliPerformance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a>

---

##### `PutPerformance` <a name="PutPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putPerformance"></a>

```csharp
private void PutPerformance(MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putPerformance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a>

---

##### `ResetBasicSliPerformance` <a name="ResetBasicSliPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetBasicSliPerformance"></a>

```csharp
private void ResetBasicSliPerformance()
```

##### `ResetPerformance` <a name="ResetPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetPerformance"></a>

```csharp
private void ResetPerformance()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetThreshold"></a>

```csharp
private void ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.basicSliPerformance">BasicSliPerformance</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.performance">Performance</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.basicSliPerformanceInput">BasicSliPerformanceInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.performanceInput">PerformanceInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold">MonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BasicSliPerformance`<sup>Required</sup> <a name="BasicSliPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.basicSliPerformance"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference BasicSliPerformance { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference</a>

---

##### `Performance`<sup>Required</sup> <a name="Performance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.performance"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference Performance { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference</a>

---

##### `BasicSliPerformanceInput`<sup>Optional</sup> <a name="BasicSliPerformanceInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.basicSliPerformanceInput"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance BasicSliPerformanceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a>

---

##### `PerformanceInput`<sup>Optional</sup> <a name="PerformanceInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.performanceInput"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance PerformanceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a>

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.internalValue"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThreshold InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold">MonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.putRange">PutRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.putRange"></a>

```csharp
private void PutRange(MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.distributionFilterInput">DistributionFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.distributionFilter">DistributionFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.range"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference Range { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference</a>

---

##### `DistributionFilterInput`<sup>Optional</sup> <a name="DistributionFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.distributionFilterInput"></a>

```csharp
public string DistributionFilterInput { get; }
```

- *Type:* string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.rangeInput"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange RangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a>

---

##### `DistributionFilter`<sup>Required</sup> <a name="DistributionFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.distributionFilter"></a>

```csharp
public string DistributionFilter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.internalValue"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.internalValue"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetBadServiceFilter">ResetBadServiceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetGoodServiceFilter">ResetGoodServiceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetTotalServiceFilter">ResetTotalServiceFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBadServiceFilter` <a name="ResetBadServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetBadServiceFilter"></a>

```csharp
private void ResetBadServiceFilter()
```

##### `ResetGoodServiceFilter` <a name="ResetGoodServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetGoodServiceFilter"></a>

```csharp
private void ResetGoodServiceFilter()
```

##### `ResetTotalServiceFilter` <a name="ResetTotalServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetTotalServiceFilter"></a>

```csharp
private void ResetTotalServiceFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.badServiceFilterInput">BadServiceFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.goodServiceFilterInput">GoodServiceFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.totalServiceFilterInput">TotalServiceFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.badServiceFilter">BadServiceFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.goodServiceFilter">GoodServiceFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.totalServiceFilter">TotalServiceFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BadServiceFilterInput`<sup>Optional</sup> <a name="BadServiceFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.badServiceFilterInput"></a>

```csharp
public string BadServiceFilterInput { get; }
```

- *Type:* string

---

##### `GoodServiceFilterInput`<sup>Optional</sup> <a name="GoodServiceFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.goodServiceFilterInput"></a>

```csharp
public string GoodServiceFilterInput { get; }
```

- *Type:* string

---

##### `TotalServiceFilterInput`<sup>Optional</sup> <a name="TotalServiceFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.totalServiceFilterInput"></a>

```csharp
public string TotalServiceFilterInput { get; }
```

- *Type:* string

---

##### `BadServiceFilter`<sup>Required</sup> <a name="BadServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.badServiceFilter"></a>

```csharp
public string BadServiceFilter { get; }
```

- *Type:* string

---

##### `GoodServiceFilter`<sup>Required</sup> <a name="GoodServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.goodServiceFilter"></a>

```csharp
public string GoodServiceFilter { get; }
```

- *Type:* string

---

##### `TotalServiceFilter`<sup>Required</sup> <a name="TotalServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.totalServiceFilter"></a>

```csharp
public string TotalServiceFilter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.internalValue"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putDistributionCut">PutDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putGoodTotalRatio">PutGoodTotalRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resetDistributionCut">ResetDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resetGoodTotalRatio">ResetGoodTotalRatio</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDistributionCut` <a name="PutDistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putDistributionCut"></a>

```csharp
private void PutDistributionCut(MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putDistributionCut.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a>

---

##### `PutGoodTotalRatio` <a name="PutGoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putGoodTotalRatio"></a>

```csharp
private void PutGoodTotalRatio(MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putGoodTotalRatio.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a>

---

##### `ResetDistributionCut` <a name="ResetDistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resetDistributionCut"></a>

```csharp
private void ResetDistributionCut()
```

##### `ResetGoodTotalRatio` <a name="ResetGoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resetGoodTotalRatio"></a>

```csharp
private void ResetGoodTotalRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.distributionCut">DistributionCut</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.goodTotalRatio">GoodTotalRatio</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.distributionCutInput">DistributionCutInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.goodTotalRatioInput">GoodTotalRatioInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DistributionCut`<sup>Required</sup> <a name="DistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.distributionCut"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference DistributionCut { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference</a>

---

##### `GoodTotalRatio`<sup>Required</sup> <a name="GoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.goodTotalRatio"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference GoodTotalRatio { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference</a>

---

##### `DistributionCutInput`<sup>Optional</sup> <a name="DistributionCutInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.distributionCutInput"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut DistributionCutInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a>

---

##### `GoodTotalRatioInput`<sup>Optional</sup> <a name="GoodTotalRatioInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.goodTotalRatioInput"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio GoodTotalRatioInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.internalValue"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a>

---


### MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference <a name="MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.putRange">PutRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.putRange"></a>

```csharp
private void PutRange(MonitoringSloWindowsBasedSliMetricMeanInRangeRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange">MonitoringSloWindowsBasedSliMetricMeanInRangeRange</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference">MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange">MonitoringSloWindowsBasedSliMetricMeanInRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.timeSeriesInput">TimeSeriesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.timeSeries">TimeSeries</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange">MonitoringSloWindowsBasedSliMetricMeanInRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.range"></a>

```csharp
public MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference Range { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference">MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference</a>

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.rangeInput"></a>

```csharp
public MonitoringSloWindowsBasedSliMetricMeanInRangeRange RangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange">MonitoringSloWindowsBasedSliMetricMeanInRangeRange</a>

---

##### `TimeSeriesInput`<sup>Optional</sup> <a name="TimeSeriesInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.timeSeriesInput"></a>

```csharp
public string TimeSeriesInput { get; }
```

- *Type:* string

---

##### `TimeSeries`<sup>Required</sup> <a name="TimeSeries" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.timeSeries"></a>

```csharp
public string TimeSeries { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.internalValue"></a>

```csharp
public MonitoringSloWindowsBasedSliMetricMeanInRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange">MonitoringSloWindowsBasedSliMetricMeanInRange</a>

---


### MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference <a name="MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange">MonitoringSloWindowsBasedSliMetricMeanInRangeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.internalValue"></a>

```csharp
public MonitoringSloWindowsBasedSliMetricMeanInRangeRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange">MonitoringSloWindowsBasedSliMetricMeanInRangeRange</a>

---


### MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference <a name="MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.putRange">PutRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.putRange"></a>

```csharp
private void PutRange(MonitoringSloWindowsBasedSliMetricSumInRangeRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange">MonitoringSloWindowsBasedSliMetricSumInRangeRange</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference">MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange">MonitoringSloWindowsBasedSliMetricSumInRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.timeSeriesInput">TimeSeriesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.timeSeries">TimeSeries</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange">MonitoringSloWindowsBasedSliMetricSumInRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.range"></a>

```csharp
public MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference Range { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference">MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference</a>

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.rangeInput"></a>

```csharp
public MonitoringSloWindowsBasedSliMetricSumInRangeRange RangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange">MonitoringSloWindowsBasedSliMetricSumInRangeRange</a>

---

##### `TimeSeriesInput`<sup>Optional</sup> <a name="TimeSeriesInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.timeSeriesInput"></a>

```csharp
public string TimeSeriesInput { get; }
```

- *Type:* string

---

##### `TimeSeries`<sup>Required</sup> <a name="TimeSeries" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.timeSeries"></a>

```csharp
public string TimeSeries { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.internalValue"></a>

```csharp
public MonitoringSloWindowsBasedSliMetricSumInRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange">MonitoringSloWindowsBasedSliMetricSumInRange</a>

---


### MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference <a name="MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange">MonitoringSloWindowsBasedSliMetricSumInRangeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.internalValue"></a>

```csharp
public MonitoringSloWindowsBasedSliMetricSumInRangeRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange">MonitoringSloWindowsBasedSliMetricSumInRangeRange</a>

---


### MonitoringSloWindowsBasedSliOutputReference <a name="MonitoringSloWindowsBasedSliOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringSloWindowsBasedSliOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putGoodTotalRatioThreshold">PutGoodTotalRatioThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putMetricMeanInRange">PutMetricMeanInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putMetricSumInRange">PutMetricSumInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetGoodBadMetricFilter">ResetGoodBadMetricFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetGoodTotalRatioThreshold">ResetGoodTotalRatioThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetMetricMeanInRange">ResetMetricMeanInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetMetricSumInRange">ResetMetricSumInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetWindowPeriod">ResetWindowPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGoodTotalRatioThreshold` <a name="PutGoodTotalRatioThreshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putGoodTotalRatioThreshold"></a>

```csharp
private void PutGoodTotalRatioThreshold(MonitoringSloWindowsBasedSliGoodTotalRatioThreshold Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putGoodTotalRatioThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold">MonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a>

---

##### `PutMetricMeanInRange` <a name="PutMetricMeanInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putMetricMeanInRange"></a>

```csharp
private void PutMetricMeanInRange(MonitoringSloWindowsBasedSliMetricMeanInRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putMetricMeanInRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange">MonitoringSloWindowsBasedSliMetricMeanInRange</a>

---

##### `PutMetricSumInRange` <a name="PutMetricSumInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putMetricSumInRange"></a>

```csharp
private void PutMetricSumInRange(MonitoringSloWindowsBasedSliMetricSumInRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putMetricSumInRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange">MonitoringSloWindowsBasedSliMetricSumInRange</a>

---

##### `ResetGoodBadMetricFilter` <a name="ResetGoodBadMetricFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetGoodBadMetricFilter"></a>

```csharp
private void ResetGoodBadMetricFilter()
```

##### `ResetGoodTotalRatioThreshold` <a name="ResetGoodTotalRatioThreshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetGoodTotalRatioThreshold"></a>

```csharp
private void ResetGoodTotalRatioThreshold()
```

##### `ResetMetricMeanInRange` <a name="ResetMetricMeanInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetMetricMeanInRange"></a>

```csharp
private void ResetMetricMeanInRange()
```

##### `ResetMetricSumInRange` <a name="ResetMetricSumInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetMetricSumInRange"></a>

```csharp
private void ResetMetricSumInRange()
```

##### `ResetWindowPeriod` <a name="ResetWindowPeriod" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetWindowPeriod"></a>

```csharp
private void ResetWindowPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodTotalRatioThreshold">GoodTotalRatioThreshold</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricMeanInRange">MetricMeanInRange</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference">MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricSumInRange">MetricSumInRange</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference">MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodBadMetricFilterInput">GoodBadMetricFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodTotalRatioThresholdInput">GoodTotalRatioThresholdInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold">MonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricMeanInRangeInput">MetricMeanInRangeInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange">MonitoringSloWindowsBasedSliMetricMeanInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricSumInRangeInput">MetricSumInRangeInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange">MonitoringSloWindowsBasedSliMetricSumInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.windowPeriodInput">WindowPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodBadMetricFilter">GoodBadMetricFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.windowPeriod">WindowPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GoodTotalRatioThreshold`<sup>Required</sup> <a name="GoodTotalRatioThreshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodTotalRatioThreshold"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference GoodTotalRatioThreshold { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference</a>

---

##### `MetricMeanInRange`<sup>Required</sup> <a name="MetricMeanInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricMeanInRange"></a>

```csharp
public MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference MetricMeanInRange { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference">MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference</a>

---

##### `MetricSumInRange`<sup>Required</sup> <a name="MetricSumInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricSumInRange"></a>

```csharp
public MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference MetricSumInRange { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference">MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference</a>

---

##### `GoodBadMetricFilterInput`<sup>Optional</sup> <a name="GoodBadMetricFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodBadMetricFilterInput"></a>

```csharp
public string GoodBadMetricFilterInput { get; }
```

- *Type:* string

---

##### `GoodTotalRatioThresholdInput`<sup>Optional</sup> <a name="GoodTotalRatioThresholdInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodTotalRatioThresholdInput"></a>

```csharp
public MonitoringSloWindowsBasedSliGoodTotalRatioThreshold GoodTotalRatioThresholdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold">MonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a>

---

##### `MetricMeanInRangeInput`<sup>Optional</sup> <a name="MetricMeanInRangeInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricMeanInRangeInput"></a>

```csharp
public MonitoringSloWindowsBasedSliMetricMeanInRange MetricMeanInRangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange">MonitoringSloWindowsBasedSliMetricMeanInRange</a>

---

##### `MetricSumInRangeInput`<sup>Optional</sup> <a name="MetricSumInRangeInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricSumInRangeInput"></a>

```csharp
public MonitoringSloWindowsBasedSliMetricSumInRange MetricSumInRangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange">MonitoringSloWindowsBasedSliMetricSumInRange</a>

---

##### `WindowPeriodInput`<sup>Optional</sup> <a name="WindowPeriodInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.windowPeriodInput"></a>

```csharp
public string WindowPeriodInput { get; }
```

- *Type:* string

---

##### `GoodBadMetricFilter`<sup>Required</sup> <a name="GoodBadMetricFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodBadMetricFilter"></a>

```csharp
public string GoodBadMetricFilter { get; }
```

- *Type:* string

---

##### `WindowPeriod`<sup>Required</sup> <a name="WindowPeriod" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.windowPeriod"></a>

```csharp
public string WindowPeriod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.internalValue"></a>

```csharp
public MonitoringSloWindowsBasedSli InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a>

---



