# `google_healthcare_fhir_store`

Refer to the Terraform Registory for docs: [`google_healthcare_fhir_store`](https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store).

# `healthcareFhirStore` Submodule <a name="`healthcareFhirStore` Submodule" id="@cdktf/provider-google.healthcareFhirStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareFhirStore <a name="HealthcareFhirStore" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store google_healthcare_fhir_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareFhirStore(Construct Scope, string Id, HealthcareFhirStoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig">HealthcareFhirStoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig">HealthcareFhirStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.putNotificationConfig">PutNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.putStreamConfigs">PutStreamConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetComplexDataTypeReferenceParsing">ResetComplexDataTypeReferenceParsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetDefaultSearchHandlingStrict">ResetDefaultSearchHandlingStrict</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetDisableReferentialIntegrity">ResetDisableReferentialIntegrity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetDisableResourceVersioning">ResetDisableResourceVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetEnableHistoryImport">ResetEnableHistoryImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetEnableUpdateCreate">ResetEnableUpdateCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetNotificationConfig">ResetNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetStreamConfigs">ResetStreamConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutNotificationConfig` <a name="PutNotificationConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.putNotificationConfig"></a>

```csharp
private void PutNotificationConfig(HealthcareFhirStoreNotificationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a>

---

##### `PutStreamConfigs` <a name="PutStreamConfigs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.putStreamConfigs"></a>

```csharp
private void PutStreamConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.putStreamConfigs.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.putTimeouts"></a>

```csharp
private void PutTimeouts(HealthcareFhirStoreTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts">HealthcareFhirStoreTimeouts</a>

---

##### `ResetComplexDataTypeReferenceParsing` <a name="ResetComplexDataTypeReferenceParsing" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetComplexDataTypeReferenceParsing"></a>

```csharp
private void ResetComplexDataTypeReferenceParsing()
```

##### `ResetDefaultSearchHandlingStrict` <a name="ResetDefaultSearchHandlingStrict" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetDefaultSearchHandlingStrict"></a>

```csharp
private void ResetDefaultSearchHandlingStrict()
```

##### `ResetDisableReferentialIntegrity` <a name="ResetDisableReferentialIntegrity" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetDisableReferentialIntegrity"></a>

```csharp
private void ResetDisableReferentialIntegrity()
```

##### `ResetDisableResourceVersioning` <a name="ResetDisableResourceVersioning" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetDisableResourceVersioning"></a>

```csharp
private void ResetDisableResourceVersioning()
```

##### `ResetEnableHistoryImport` <a name="ResetEnableHistoryImport" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetEnableHistoryImport"></a>

```csharp
private void ResetEnableHistoryImport()
```

##### `ResetEnableUpdateCreate` <a name="ResetEnableUpdateCreate" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetEnableUpdateCreate"></a>

```csharp
private void ResetEnableUpdateCreate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNotificationConfig` <a name="ResetNotificationConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetNotificationConfig"></a>

```csharp
private void ResetNotificationConfig()
```

##### `ResetStreamConfigs` <a name="ResetStreamConfigs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetStreamConfigs"></a>

```csharp
private void ResetStreamConfigs()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

HealthcareFhirStore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

HealthcareFhirStore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

HealthcareFhirStore.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference">HealthcareFhirStoreNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.streamConfigs">StreamConfigs</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList">HealthcareFhirStoreStreamConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference">HealthcareFhirStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.complexDataTypeReferenceParsingInput">ComplexDataTypeReferenceParsingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.datasetInput">DatasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.defaultSearchHandlingStrictInput">DefaultSearchHandlingStrictInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableReferentialIntegrityInput">DisableReferentialIntegrityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableResourceVersioningInput">DisableResourceVersioningInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableHistoryImportInput">EnableHistoryImportInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableUpdateCreateInput">EnableUpdateCreateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.notificationConfigInput">NotificationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.streamConfigsInput">StreamConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.complexDataTypeReferenceParsing">ComplexDataTypeReferenceParsing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.defaultSearchHandlingStrict">DefaultSearchHandlingStrict</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableReferentialIntegrity">DisableReferentialIntegrity</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableResourceVersioning">DisableResourceVersioning</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableHistoryImport">EnableHistoryImport</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableUpdateCreate">EnableUpdateCreate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `NotificationConfig`<sup>Required</sup> <a name="NotificationConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.notificationConfig"></a>

```csharp
public HealthcareFhirStoreNotificationConfigOutputReference NotificationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference">HealthcareFhirStoreNotificationConfigOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `StreamConfigs`<sup>Required</sup> <a name="StreamConfigs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.streamConfigs"></a>

```csharp
public HealthcareFhirStoreStreamConfigsList StreamConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList">HealthcareFhirStoreStreamConfigsList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.timeouts"></a>

```csharp
public HealthcareFhirStoreTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference">HealthcareFhirStoreTimeoutsOutputReference</a>

---

##### `ComplexDataTypeReferenceParsingInput`<sup>Optional</sup> <a name="ComplexDataTypeReferenceParsingInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.complexDataTypeReferenceParsingInput"></a>

```csharp
public string ComplexDataTypeReferenceParsingInput { get; }
```

- *Type:* string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.datasetInput"></a>

```csharp
public string DatasetInput { get; }
```

- *Type:* string

---

##### `DefaultSearchHandlingStrictInput`<sup>Optional</sup> <a name="DefaultSearchHandlingStrictInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.defaultSearchHandlingStrictInput"></a>

```csharp
public object DefaultSearchHandlingStrictInput { get; }
```

- *Type:* object

---

##### `DisableReferentialIntegrityInput`<sup>Optional</sup> <a name="DisableReferentialIntegrityInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableReferentialIntegrityInput"></a>

```csharp
public object DisableReferentialIntegrityInput { get; }
```

- *Type:* object

---

##### `DisableResourceVersioningInput`<sup>Optional</sup> <a name="DisableResourceVersioningInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableResourceVersioningInput"></a>

```csharp
public object DisableResourceVersioningInput { get; }
```

- *Type:* object

---

##### `EnableHistoryImportInput`<sup>Optional</sup> <a name="EnableHistoryImportInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableHistoryImportInput"></a>

```csharp
public object EnableHistoryImportInput { get; }
```

- *Type:* object

---

##### `EnableUpdateCreateInput`<sup>Optional</sup> <a name="EnableUpdateCreateInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableUpdateCreateInput"></a>

```csharp
public object EnableUpdateCreateInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationConfigInput`<sup>Optional</sup> <a name="NotificationConfigInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.notificationConfigInput"></a>

```csharp
public HealthcareFhirStoreNotificationConfig NotificationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a>

---

##### `StreamConfigsInput`<sup>Optional</sup> <a name="StreamConfigsInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.streamConfigsInput"></a>

```csharp
public object StreamConfigsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `ComplexDataTypeReferenceParsing`<sup>Required</sup> <a name="ComplexDataTypeReferenceParsing" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.complexDataTypeReferenceParsing"></a>

```csharp
public string ComplexDataTypeReferenceParsing { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `DefaultSearchHandlingStrict`<sup>Required</sup> <a name="DefaultSearchHandlingStrict" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.defaultSearchHandlingStrict"></a>

```csharp
public object DefaultSearchHandlingStrict { get; }
```

- *Type:* object

---

##### `DisableReferentialIntegrity`<sup>Required</sup> <a name="DisableReferentialIntegrity" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableReferentialIntegrity"></a>

```csharp
public object DisableReferentialIntegrity { get; }
```

- *Type:* object

---

##### `DisableResourceVersioning`<sup>Required</sup> <a name="DisableResourceVersioning" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableResourceVersioning"></a>

```csharp
public object DisableResourceVersioning { get; }
```

- *Type:* object

---

##### `EnableHistoryImport`<sup>Required</sup> <a name="EnableHistoryImport" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableHistoryImport"></a>

```csharp
public object EnableHistoryImport { get; }
```

- *Type:* object

---

##### `EnableUpdateCreate`<sup>Required</sup> <a name="EnableUpdateCreate" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableUpdateCreate"></a>

```csharp
public object EnableUpdateCreate { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareFhirStoreConfig <a name="HealthcareFhirStoreConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareFhirStoreConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Dataset,
    string Name,
    string Version,
    string ComplexDataTypeReferenceParsing = null,
    object DefaultSearchHandlingStrict = null,
    object DisableReferentialIntegrity = null,
    object DisableResourceVersioning = null,
    object EnableHistoryImport = null,
    object EnableUpdateCreate = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    HealthcareFhirStoreNotificationConfig NotificationConfig = null,
    object StreamConfigs = null,
    HealthcareFhirStoreTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.dataset">Dataset</a></code> | <code>string</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.name">Name</a></code> | <code>string</code> | The resource name for the FhirStore. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.version">Version</a></code> | <code>string</code> | The FHIR specification version. Possible values: ["DSTU2", "STU3", "R4"]. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.complexDataTypeReferenceParsing">ComplexDataTypeReferenceParsing</a></code> | <code>string</code> | Enable parsing of references within complex FHIR data types such as Extensions. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.defaultSearchHandlingStrict">DefaultSearchHandlingStrict</a></code> | <code>object</code> | If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.disableReferentialIntegrity">DisableReferentialIntegrity</a></code> | <code>object</code> | Whether to disable referential integrity in this FHIR store. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.disableResourceVersioning">DisableResourceVersioning</a></code> | <code>object</code> | Whether to disable resource versioning for this FHIR store. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.enableHistoryImport">EnableHistoryImport</a></code> | <code>object</code> | Whether to allow the bulk import API to accept history bundles and directly insert historical resource versions into the FHIR store. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.enableUpdateCreate">EnableUpdateCreate</a></code> | <code>object</code> | Whether this FHIR store has the updateCreate capability. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#id HealthcareFhirStore#id}. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-supplied key-value pairs used to organize FHIR stores. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.streamConfigs">StreamConfigs</a></code> | <code>object</code> | stream_configs block. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts">HealthcareFhirStoreTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.dataset"></a>

```csharp
public string Dataset { get; set; }
```

- *Type:* string

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#dataset HealthcareFhirStore#dataset}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name for the FhirStore.

* Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#name HealthcareFhirStore#name}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The FHIR specification version. Possible values: ["DSTU2", "STU3", "R4"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#version HealthcareFhirStore#version}

---

##### `ComplexDataTypeReferenceParsing`<sup>Optional</sup> <a name="ComplexDataTypeReferenceParsing" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.complexDataTypeReferenceParsing"></a>

```csharp
public string ComplexDataTypeReferenceParsing { get; set; }
```

- *Type:* string

Enable parsing of references within complex FHIR data types such as Extensions.

If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED by default after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources. Possible values: ["COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED", "DISABLED", "ENABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#complex_data_type_reference_parsing HealthcareFhirStore#complex_data_type_reference_parsing}

---

##### `DefaultSearchHandlingStrict`<sup>Optional</sup> <a name="DefaultSearchHandlingStrict" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.defaultSearchHandlingStrict"></a>

```csharp
public object DefaultSearchHandlingStrict { get; set; }
```

- *Type:* object

If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters.

If false, uses the FHIR specification default handling=lenient which ignores unrecognized search parameters.
The handling can always be changed from the default on an individual API call by setting the HTTP header Prefer: handling=strict or Prefer: handling=lenient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#default_search_handling_strict HealthcareFhirStore#default_search_handling_strict}

---

##### `DisableReferentialIntegrity`<sup>Optional</sup> <a name="DisableReferentialIntegrity" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.disableReferentialIntegrity"></a>

```csharp
public object DisableReferentialIntegrity { get; set; }
```

- *Type:* object

Whether to disable referential integrity in this FHIR store.

This field is immutable after FHIR store
creation. The default value is false, meaning that the API will enforce referential integrity and fail the
requests that will result in inconsistent state in the FHIR store. When this field is set to true, the API
will skip referential integrity check. Consequently, operations that rely on references, such as
Patient.get$everything, will not return all the results if broken references exist.

* Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#disable_referential_integrity HealthcareFhirStore#disable_referential_integrity}

---

##### `DisableResourceVersioning`<sup>Optional</sup> <a name="DisableResourceVersioning" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.disableResourceVersioning"></a>

```csharp
public object DisableResourceVersioning { get; set; }
```

- *Type:* object

Whether to disable resource versioning for this FHIR store.

This field can not be changed after the creation
of FHIR store. If set to false, which is the default behavior, all write operations will cause historical
versions to be recorded automatically. The historical versions can be fetched through the history APIs, but
cannot be updated. If set to true, no historical versions will be kept. The server will send back errors for
attempts to read the historical versions.

* Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#disable_resource_versioning HealthcareFhirStore#disable_resource_versioning}

---

##### `EnableHistoryImport`<sup>Optional</sup> <a name="EnableHistoryImport" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.enableHistoryImport"></a>

```csharp
public object EnableHistoryImport { get; set; }
```

- *Type:* object

Whether to allow the bulk import API to accept history bundles and directly insert historical resource versions into the FHIR store.

Importing resource histories creates resource interactions that appear to have
occurred in the past, which clients may not want to allow. If set to false, history bundles within an import
will fail with an error.

* Changing this property may recreate the FHIR store (removing all data) **
* This property can be changed manually in the Google Cloud Healthcare admin console without recreating the FHIR store **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#enable_history_import HealthcareFhirStore#enable_history_import}

---

##### `EnableUpdateCreate`<sup>Optional</sup> <a name="EnableUpdateCreate" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.enableUpdateCreate"></a>

```csharp
public object EnableUpdateCreate { get; set; }
```

- *Type:* object

Whether this FHIR store has the updateCreate capability.

This determines if the client can use an Update
operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through
the Create operation and attempts to Update a non-existent resource will return errors. Please treat the audit
logs with appropriate levels of care if client-specified resource IDs contain sensitive data such as patient
identifiers, those IDs will be part of the FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub
notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#enable_update_create HealthcareFhirStore#enable_update_create}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#id HealthcareFhirStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-supplied key-value pairs used to organize FHIR stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

*Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#labels HealthcareFhirStore#labels}

---

##### `NotificationConfig`<sup>Optional</sup> <a name="NotificationConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.notificationConfig"></a>

```csharp
public HealthcareFhirStoreNotificationConfig NotificationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#notification_config HealthcareFhirStore#notification_config}

---

##### `StreamConfigs`<sup>Optional</sup> <a name="StreamConfigs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.streamConfigs"></a>

```csharp
public object StreamConfigs { get; set; }
```

- *Type:* object

stream_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#stream_configs HealthcareFhirStore#stream_configs}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.timeouts"></a>

```csharp
public HealthcareFhirStoreTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts">HealthcareFhirStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#timeouts HealthcareFhirStore#timeouts}

---

### HealthcareFhirStoreNotificationConfig <a name="HealthcareFhirStoreNotificationConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareFhirStoreNotificationConfig {
    string PubsubTopic
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; set; }
```

- *Type:* string

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#pubsub_topic HealthcareFhirStore#pubsub_topic}

---

### HealthcareFhirStoreStreamConfigs <a name="HealthcareFhirStoreStreamConfigs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareFhirStoreStreamConfigs {
    HealthcareFhirStoreStreamConfigsBigqueryDestination BigqueryDestination,
    string[] ResourceTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs.property.bigqueryDestination">BigqueryDestination</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination">HealthcareFhirStoreStreamConfigsBigqueryDestination</a></code> | bigquery_destination block. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | Supply a FHIR resource type (such as "Patient" or "Observation"). |

---

##### `BigqueryDestination`<sup>Required</sup> <a name="BigqueryDestination" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs.property.bigqueryDestination"></a>

```csharp
public HealthcareFhirStoreStreamConfigsBigqueryDestination BigqueryDestination { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination">HealthcareFhirStoreStreamConfigsBigqueryDestination</a>

bigquery_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#bigquery_destination HealthcareFhirStore#bigquery_destination}

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; set; }
```

- *Type:* string[]

Supply a FHIR resource type (such as "Patient" or "Observation").

See
https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats
an empty list as an intent to stream all the supported resource types in this FHIR store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#resource_types HealthcareFhirStore#resource_types}

---

### HealthcareFhirStoreStreamConfigsBigqueryDestination <a name="HealthcareFhirStoreStreamConfigsBigqueryDestination" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareFhirStoreStreamConfigsBigqueryDestination {
    string DatasetUri,
    HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig SchemaConfig
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination.property.datasetUri">DatasetUri</a></code> | <code>string</code> | BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination.property.schemaConfig">SchemaConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a></code> | schema_config block. |

---

##### `DatasetUri`<sup>Required</sup> <a name="DatasetUri" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination.property.datasetUri"></a>

```csharp
public string DatasetUri { get; set; }
```

- *Type:* string

BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#dataset_uri HealthcareFhirStore#dataset_uri}

---

##### `SchemaConfig`<sup>Required</sup> <a name="SchemaConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination.property.schemaConfig"></a>

```csharp
public HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig SchemaConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

schema_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#schema_config HealthcareFhirStore#schema_config}

---

### HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig <a name="HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig {
    double RecursiveStructureDepth,
    HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig LastUpdatedPartitionConfig = null,
    string SchemaType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.recursiveStructureDepth">RecursiveStructureDepth</a></code> | <code>double</code> | The depth for all recursive structures in the output analytics schema. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.lastUpdatedPartitionConfig">LastUpdatedPartitionConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a></code> | last_updated_partition_config block. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.schemaType">SchemaType</a></code> | <code>string</code> | Specifies the output schema type. |

---

##### `RecursiveStructureDepth`<sup>Required</sup> <a name="RecursiveStructureDepth" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.recursiveStructureDepth"></a>

```csharp
public double RecursiveStructureDepth { get; set; }
```

- *Type:* double

The depth for all recursive structures in the output analytics schema.

For example, concept in the CodeSystem
resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called
concept.concept but not concept.concept.concept. If not specified or set to 0, the server will use the default
value 2. The maximum depth allowed is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#recursive_structure_depth HealthcareFhirStore#recursive_structure_depth}

---

##### `LastUpdatedPartitionConfig`<sup>Optional</sup> <a name="LastUpdatedPartitionConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.lastUpdatedPartitionConfig"></a>

```csharp
public HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig LastUpdatedPartitionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

last_updated_partition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#last_updated_partition_config HealthcareFhirStore#last_updated_partition_config}

---

##### `SchemaType`<sup>Optional</sup> <a name="SchemaType" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.schemaType"></a>

```csharp
public string SchemaType { get; set; }
```

- *Type:* string

Specifies the output schema type.

ANALYTICS: Analytics schema defined by the FHIR community.
See https://github.com/FHIR/sql-on-fhir/blob/master/sql-on-fhir.md.
ANALYTICS_V2: Analytics V2, similar to schema defined by the FHIR community, with added support for extensions with one or more occurrences and contained resources in stringified JSON.
LOSSLESS: A data-driven schema generated from the fields present in the FHIR data being exported, with no additional simplification. Default value: "ANALYTICS" Possible values: ["ANALYTICS", "ANALYTICS_V2", "LOSSLESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#schema_type HealthcareFhirStore#schema_type}

---

### HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig <a name="HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig {
    string Type,
    string ExpirationMs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.type">Type</a></code> | <code>string</code> | Type of partitioning. Possible values: ["PARTITION_TYPE_UNSPECIFIED", "HOUR", "DAY", "MONTH", "YEAR"]. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.expirationMs">ExpirationMs</a></code> | <code>string</code> | Number of milliseconds for which to keep the storage for a partition. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of partitioning. Possible values: ["PARTITION_TYPE_UNSPECIFIED", "HOUR", "DAY", "MONTH", "YEAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#type HealthcareFhirStore#type}

---

##### `ExpirationMs`<sup>Optional</sup> <a name="ExpirationMs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.expirationMs"></a>

```csharp
public string ExpirationMs { get; set; }
```

- *Type:* string

Number of milliseconds for which to keep the storage for a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#expiration_ms HealthcareFhirStore#expiration_ms}

---

### HealthcareFhirStoreTimeouts <a name="HealthcareFhirStoreTimeouts" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareFhirStoreTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#create HealthcareFhirStore#create}. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#delete HealthcareFhirStore#delete}. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#update HealthcareFhirStore#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#create HealthcareFhirStore#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#delete HealthcareFhirStore#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/healthcare_fhir_store#update HealthcareFhirStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareFhirStoreNotificationConfigOutputReference <a name="HealthcareFhirStoreNotificationConfigOutputReference" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareFhirStoreNotificationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```csharp
public string PubsubTopicInput { get; }
```

- *Type:* string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.internalValue"></a>

```csharp
public HealthcareFhirStoreNotificationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a>

---


### HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference <a name="HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig">PutSchemaConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchemaConfig` <a name="PutSchemaConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig"></a>

```csharp
private void PutSchemaConfig(HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfig">SchemaConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUriInput">DatasetUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfigInput">SchemaConfigInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUri">DatasetUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination">HealthcareFhirStoreStreamConfigsBigqueryDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchemaConfig`<sup>Required</sup> <a name="SchemaConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfig"></a>

```csharp
public HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference SchemaConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference</a>

---

##### `DatasetUriInput`<sup>Optional</sup> <a name="DatasetUriInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUriInput"></a>

```csharp
public string DatasetUriInput { get; }
```

- *Type:* string

---

##### `SchemaConfigInput`<sup>Optional</sup> <a name="SchemaConfigInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfigInput"></a>

```csharp
public HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig SchemaConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

---

##### `DatasetUri`<sup>Required</sup> <a name="DatasetUri" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUri"></a>

```csharp
public string DatasetUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.internalValue"></a>

```csharp
public HealthcareFhirStoreStreamConfigsBigqueryDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination">HealthcareFhirStoreStreamConfigsBigqueryDestination</a>

---


### HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference <a name="HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resetExpirationMs">ResetExpirationMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpirationMs` <a name="ResetExpirationMs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resetExpirationMs"></a>

```csharp
private void ResetExpirationMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMsInput">ExpirationMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMs">ExpirationMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpirationMsInput`<sup>Optional</sup> <a name="ExpirationMsInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMsInput"></a>

```csharp
public string ExpirationMsInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ExpirationMs`<sup>Required</sup> <a name="ExpirationMs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMs"></a>

```csharp
public string ExpirationMs { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.internalValue"></a>

```csharp
public HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

---


### HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference <a name="HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig">PutLastUpdatedPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetLastUpdatedPartitionConfig">ResetLastUpdatedPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetSchemaType">ResetSchemaType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLastUpdatedPartitionConfig` <a name="PutLastUpdatedPartitionConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig"></a>

```csharp
private void PutLastUpdatedPartitionConfig(HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

---

##### `ResetLastUpdatedPartitionConfig` <a name="ResetLastUpdatedPartitionConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetLastUpdatedPartitionConfig"></a>

```csharp
private void ResetLastUpdatedPartitionConfig()
```

##### `ResetSchemaType` <a name="ResetSchemaType" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetSchemaType"></a>

```csharp
private void ResetSchemaType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfig">LastUpdatedPartitionConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfigInput">LastUpdatedPartitionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepthInput">RecursiveStructureDepthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaTypeInput">SchemaTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepth">RecursiveStructureDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaType">SchemaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastUpdatedPartitionConfig`<sup>Required</sup> <a name="LastUpdatedPartitionConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfig"></a>

```csharp
public HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference LastUpdatedPartitionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference</a>

---

##### `LastUpdatedPartitionConfigInput`<sup>Optional</sup> <a name="LastUpdatedPartitionConfigInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfigInput"></a>

```csharp
public HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig LastUpdatedPartitionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

---

##### `RecursiveStructureDepthInput`<sup>Optional</sup> <a name="RecursiveStructureDepthInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepthInput"></a>

```csharp
public double RecursiveStructureDepthInput { get; }
```

- *Type:* double

---

##### `SchemaTypeInput`<sup>Optional</sup> <a name="SchemaTypeInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaTypeInput"></a>

```csharp
public string SchemaTypeInput { get; }
```

- *Type:* string

---

##### `RecursiveStructureDepth`<sup>Required</sup> <a name="RecursiveStructureDepth" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepth"></a>

```csharp
public double RecursiveStructureDepth { get; }
```

- *Type:* double

---

##### `SchemaType`<sup>Required</sup> <a name="SchemaType" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaType"></a>

```csharp
public string SchemaType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.internalValue"></a>

```csharp
public HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

---


### HealthcareFhirStoreStreamConfigsList <a name="HealthcareFhirStoreStreamConfigsList" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareFhirStoreStreamConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.get"></a>

```csharp
private HealthcareFhirStoreStreamConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HealthcareFhirStoreStreamConfigsOutputReference <a name="HealthcareFhirStoreStreamConfigsOutputReference" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareFhirStoreStreamConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination">PutBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBigqueryDestination` <a name="PutBigqueryDestination" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination"></a>

```csharp
private void PutBigqueryDestination(HealthcareFhirStoreStreamConfigsBigqueryDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination">HealthcareFhirStoreStreamConfigsBigqueryDestination</a>

---

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.resetResourceTypes"></a>

```csharp
private void ResetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestination">BigqueryDestination</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference">HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestinationInput">BigqueryDestinationInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination">HealthcareFhirStoreStreamConfigsBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BigqueryDestination`<sup>Required</sup> <a name="BigqueryDestination" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestination"></a>

```csharp
public HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference BigqueryDestination { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference">HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference</a>

---

##### `BigqueryDestinationInput`<sup>Optional</sup> <a name="BigqueryDestinationInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestinationInput"></a>

```csharp
public HealthcareFhirStoreStreamConfigsBigqueryDestination BigqueryDestinationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination">HealthcareFhirStoreStreamConfigsBigqueryDestination</a>

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypesInput"></a>

```csharp
public string[] ResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HealthcareFhirStoreTimeoutsOutputReference <a name="HealthcareFhirStoreTimeoutsOutputReference" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareFhirStoreTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



